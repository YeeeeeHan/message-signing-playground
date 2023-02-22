import { CheckIcon } from '@chakra-ui/icons';
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Grid,
  Heading,
  List,
  ListIcon,
  ListItem,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import Gpay from 'components/modules/Payment/gpay';
import { BigNumber } from 'ethers';
import { abi as frgAbi } from '../../../../artifacts/contracts/erc20tokens/Frg.sol/Frg.json';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const FrgPurchaseCard = () => {
  const { address: userAddress } = useAccount();
  const [balance, setBalance] = useState(0);

  // usePrepareContractWrite
  const { config, error } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_FRG_ADDRESS,
    abi: frgAbi,
    functionName: 'mint',
    args: [userAddress, BigNumber.from(10).mul(BigNumber.from(10).pow(18))],
  });

  // useContractWrite
  const {
    data: mintData,
    write: mintTokenFn,
    isSuccess: isMintStarted,
    error: mintError,
  } = useContractWrite({
    ...config,
    onSuccess(data) {
      console.log('getData Success', data);
    },
  });

  // Check TX for mint function
  const {
    isSuccess: txSuccess,
    isLoading: txLoading,
    error: txError,
  } = useWaitForTransaction({
    confirmations: 1,
    hash: mintData?.hash,
  });

  // Token Balance
  const { data: userBalance } = useContractRead({
    address: process.env.NEXT_PUBLIC_FRG_ADDRESS,
    abi: frgAbi,
    functionName: 'balanceOf',
    args: [userAddress],
    watch: true,
  });
  useEffect(() => {
    if (userBalance) {
      console.log(userAddress);
      let temp = (userBalance as number) / 10 ** 18;
      setBalance(temp);
    }
  }, [userBalance]);

  interface txResult {
    txLoading: Boolean;
    txSuccess: Boolean;
    txError: Boolean;
    isMintStarted: Boolean;
    mintError: Boolean;
  }

  const renderResult = ({ txLoading, txSuccess, txError, isMintStarted, mintError }: txResult) => {
    if (isMintStarted) {
      <Alert status="info">
        <AlertIcon />
        Mint starting...
        <br />
        <Spinner />
      </Alert>;
    }

    if (mintError || txError) {
      return (
        <Alert status="error">
          <AlertIcon />
          There was an error processing the mint
        </Alert>
      );
    }
    if (txLoading) {
      return (
        <Alert status="info">
          <AlertIcon />
          Minting FRG tokens...
          <br />
          <Spinner />
        </Alert>
      );
    }

    if (txSuccess) {
      return (
        <>
          <Alert status="success">
            <AlertIcon />
            Successfully minted &nbsp;
            <Button
              bg={'green.400'}
              color={'white'}
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: 'green.500',
              }}
              _focus={{
                bg: 'green.500',
              }}
            >
              <Link href="/balances/erc20">View Balance</Link>
            </Button>
          </Alert>
        </>
      );
    }

    return <></>;
  };
  return (
    <>
      <Heading size="lg" marginBottom={6}>
        Purchase FRG tokens
      </Heading>
      <Center py={6}>
        <br />
        <Box
          maxW={'400px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
        >
          <Stack textAlign={'center'} p={6} color={useColorModeValue('gray.800', 'white')} align={'center'}>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'3xl'}>$</Text>
              <Text fontSize={'6xl'} fontWeight={800}>
                1
              </Text>
              <Text color={'gray.500'}>for 10 FRG Tokens</Text>
            </Stack>
          </Stack>

          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Mint NFTs
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Megaphone chat
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Fast forward battle time
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Double EXP
              </ListItem>
            </List>
            <br />
            <br />
            <Center>
              <Gpay mintFn={mintTokenFn!} />
            </Center>
            <br />
            <Text color={'gray.500'}>Current Balance: {balance} $FRG</Text>
            <br />
            {renderResult({ txLoading, txSuccess, txError, isMintStarted, mintError })}
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default FrgPurchaseCard;
