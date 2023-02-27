import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Link,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { NFTCardMint } from 'components/modules';
import { BigNumber } from 'ethers';
import { useEffect, useState } from 'react';
import {
  Address,
  useAccount,
  useBalance,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import frg from '../../../../artifacts/contracts/erc20tokens/Frg.sol/Frg.json';
import pet from '../../../../artifacts/contracts/nfts/Pet.sol/Pet.json';
import { IResponseData } from '../../../types/IMint';

// tslint:disable-next-line: no-console
// const rate = (10 * 10 ** 18).toLocaleString('fullwide', {
//   useGrouping: false,
// });
const ContractLink = `https://mumbai.polygonscan.com/address/${process.env.NEXT_PUBLIC_PET_ADDRESS}`;

interface mintNFTVariables {
  userAddress: `0x${string}`;
}

interface txResult {
  frgApproveLoading: boolean;
  frgApproveSuccess: boolean;
  frgApproveError: Error | null;
}

const renderResult = ({ frgApproveLoading: txLoading, frgApproveSuccess: txSuccess }: txResult) => {
  if (txLoading) {
    return (
      <Alert status="info">
        <AlertIcon />
        Approving FRG spening... &nbsp;
        <br />
        <Spinner />
      </Alert>
    );
  }

  if (txSuccess) {
    return (
      <>
        <Alert status="info">
          <AlertIcon />
          Minting NFT... &nbsp;
          <br />
          <Spinner />
        </Alert>
      </>
    );
  }

  return <></>;
};

export default function NftMint() {
  const toast = useToast();
  const descBgColor = useColorModeValue('gray.100', 'gray.600');
  const { address: userAddress } = useAccount();
  const [respData, setRespData] = useState<IResponseData>();

  // Fetch frg token balance
  const { data: frgBalance } = useBalance({
    address: userAddress,
    token: process.env.NEXT_PUBLIC_FRG_ADDRESS as Address,
  });

  // Get Rate from pet contract
  const { data: rateData } = useContractRead({
    address: process.env.NEXT_PUBLIC_PET_ADDRESS,
    abi: pet.abi,
    functionName: 'rate',
  });
  const frgCost = BigNumber.from(rateData).div(BigNumber.from(10).pow(18)).toNumber();

  // Approving FRG spending contract write
  const { config } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_FRG_ADDRESS,
    abi: frg.abi,
    functionName: 'approve',
    args: [process.env.NEXT_PUBLIC_DEPLOYER_ADDRESS, rateData],
  });
  const { data: frgApproveData, write } = useContractWrite({
    ...config,
    onSuccess(data) {
      console.log('useContractWrite approve FRG success', data);
    },
  });

  // Check TX status for frg approve
  const {
    isSuccess: frgApproveSuccess,
    isLoading: frgApproveLoading,
    error: frgApproveError,
  } = useWaitForTransaction({
    confirmations: 1,
    hash: frgApproveData?.hash,
  });

  // FRG balance pre-checks
  const approveFrgSpending = async () => {
    // rateData divided by 10 ** 18
    if (Number(frgBalance?.formatted) < frgCost) {
      console.log('frgBalance < rate', Number(frgBalance?.formatted) < frgCost);
      toast({
        title: 'Insufficient FRG balance.',
        description: `You need at least ${frgCost} FRG to mint NFT.`,
        status: 'error',
        duration: null,
        isClosable: true,
        position: 'top-right',
      });
      return;
    }
    write?.();
  };

  // Function to mint NFT from backend
  const mintFromServer = async ({ userAddress: ua }: mintNFTVariables) => {
    const body = JSON.stringify({
      minterAddress: ua,
    });
    const ENDPOINT = '/api/v1/mint';
    console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}${ENDPOINT}/pet`);
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${ENDPOINT}/pet` || '', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body,
    });
    const res = await response.json();

    if (!response.ok) {
      console.log('@@@@@@@@ 1 @@@@@', res);
      throw new Error(res.error);
    }
    return res;
  };
  const { isLoading: isLoadingBackendMint, mutate } = useMutation(mintFromServer, {
    onSuccess: (data: IResponseData) => {
      setRespData(data);
    },
    onError: (error: Error) => {
      toast({
        title: 'Error occurred.',
        description: error.message,
        status: 'error',
        duration: null,
        isClosable: true,
        position: 'top-right',
      });
    },
  });

  useEffect(() => {
    if (frgApproveSuccess) {
      console.log('TX SUCCESS', frgApproveSuccess);
      mutate({ userAddress: userAddress as `0x${string}` });
    }
  }, [frgApproveSuccess]);

  return (
    <Center>
      <Box
        maxW={'660px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Stack maxW="md" mx="auto" py={{ base: '12', md: '16' }} spacing={{ base: '6', md: '10' }}>
          <Stack spacing="3" textAlign="center">
            <Text
              color={useColorModeValue('blue.500', 'blue.200')}
              fontWeight="extrabold"
              fontSize={{ base: '3xl', md: '4xl' }}
              textTransform="uppercase"
              transform="scale(1.2)"
            >
              Mint Pet NFT
            </Text>
            <Text fontSize="lg">Collect unique pets for your heroes, and become a part of our community!</Text>
            <Text fontSize="sm" textAlign="center" color={useColorModeValue('gray.600', 'gray.400')}>
              234/1000 already minted
            </Text>
            {respData ? (
              <NFTCardMint nft={respData} />
            ) : (
              <>
                <Center>
                  <SimpleGrid
                    columns={2}
                    spacing={4}
                    bgColor={descBgColor}
                    padding={2.5}
                    borderRadius="xl"
                    marginTop={2}
                  >
                    <Box>
                      <Box as="h4" noOfLines={1} fontWeight="bold" fontSize="sm">
                        Amount:
                      </Box>
                      <Box as="h4" noOfLines={1} fontWeight="bold" fontSize="sm">
                        Total cost:
                      </Box>
                    </Box>
                    <Box>
                      <Box as="h4" noOfLines={1} fontSize="sm">
                        1
                      </Box>
                      <Box as="h4" noOfLines={1} fontSize="sm">
                        10 $FRG
                      </Box>
                    </Box>
                  </SimpleGrid>
                </Center>
                <Center>
                  {isLoadingBackendMint || frgApproveLoading ? (
                    <Button colorScheme="teal" size="lg" width="xs" isDisabled={true}>
                      Mint Pet NFT
                    </Button>
                  ) : (
                    <Button colorScheme="teal" size="lg" width="xs" onClick={() => approveFrgSpending()}>
                      Mint Pet NFT
                    </Button>
                  )}
                </Center>
                <Link
                  href={ContractLink}
                  fontSize="sm"
                  textAlign="center"
                  color={useColorModeValue('gray.600', 'gray.400')}
                  textDecoration="underline"
                >
                  NFT Smart contract <ExternalLinkIcon />
                </Link>
                {renderResult({ frgApproveLoading, frgApproveSuccess, frgApproveError })}
              </>
            )}
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
