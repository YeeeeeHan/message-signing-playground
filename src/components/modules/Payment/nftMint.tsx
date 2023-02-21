import React, { useState } from 'react';
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';
import { abi as frgAbi } from '../../../../artifacts/contracts/erc20tokens/Frg.sol/Frg.json';
import { BigNumber } from 'ethers';
import { IResponseData } from '../../../../interfaces/IMint';
import { NFTCardMint } from 'components/modules';
import { Box, Button, Center, Link, Stack, useColorModeValue, Text, SimpleGrid, Spinner } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { useMutation, useQuery } from '@tanstack/react-query';

const rate = (100 * 10 ** 18).toLocaleString('fullwide', {
  useGrouping: false,
});
const ContractLink = `https://mumbai.polygonscan.com/address/${process.env.NEXT_PUBLIC_PET_ADDRESS}`;

interface mintNFTVariables {
  userAddress: `0x${string}`;
}
interface serverResponse {
  success: boolean;
  data: IResponseData;
  error?: any;
}

const mintFromServer = async ({ userAddress }: mintNFTVariables) => {
  const body = JSON.stringify({
    minterAddress: userAddress,
  });
  const ENDPOINT = '/api/v1/mint';
  console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}${ENDPOINT}/pet`);
  const response: serverResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${ENDPOINT}/pet` || '', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body,
  }).then((res) => res.json());
  return response;
};

export default function NftMint() {
  const descBgColor = useColorModeValue('gray.100', 'gray.600');
  const { address: userAddress } = useAccount();
  const [respData, setRespData] = useState<IResponseData>();
  const { config, error } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_FRG_ADDRESS,
    abi: frgAbi,
    functionName: 'approve',
    args: [process.env.NEXT_PUBLIC_PET_ADDRESS, BigNumber.from(rate)],
  });
  const { writeAsync: approveFrgSpending } = useContractWrite({
    ...config,
    onSuccess(data) {
      console.log('getData Success', data);
    },
  });

  // Function to mint NFT
  const { isLoading, mutateAsync } = useMutation(mintFromServer, {
    onSuccess: (data) => {},
    onError: (error) => {},
  });
  const mintNft = async () => {
    try {
      await approveFrgSpending?.();
      console.log('APPROVED');
    } catch (error) {
      console.error(error);
    } finally {
      const response = await mutateAsync({ userAddress: userAddress as `0x${string}` });
      setRespData(response.data);
    }
  };

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
                        100 $FRG
                      </Box>
                    </Box>
                  </SimpleGrid>
                </Center>
                <Center>
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <Button colorScheme="teal" size="lg" width="xs" onClick={() => mintNft()}>
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
              </>
            )}
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
