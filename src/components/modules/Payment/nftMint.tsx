import React, { useEffect, useState } from 'react';
import {
  useAccount,
  useSigner,
  useBalance,
  Address,
  useContract,
  useSignTypedData,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from 'wagmi';
import { abi as frgAbi } from '../../../../artifacts/contracts/erc20tokens/Frg.sol/Frg.json';
import { abi as petAbi } from '../../../../artifacts/contracts/nfts/Pet.sol/Pet.json';
import { BigNumber, BigNumberish, constants, Contract, ethers, Wallet, Signer, VoidSigner } from 'ethers';
import { Frg, Pet } from '../../../../typechain-types';
import { IMetadata } from '../../../../interfaces/IMint';
import frg from '../../../../pages/purchase/frg';
import { sign } from 'crypto';
import { isError } from 'util';
import { NFTCardMint } from 'components/modules';
import { EvmNft } from 'moralis/common-evm-utils';
import { Box, Button, Center, Grid, Link, Stack, useColorModeValue, Text, SimpleGrid } from '@chakra-ui/react';
import { Logo } from '@web3uikit/core';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const rate = (100 * 10 ** 18).toLocaleString('fullwide', {
  useGrouping: false,
});
// ========================================================================
export async function GetPermitSignature(
  ownerAddress: Address,
  owner: VoidSigner,
  token: Contract,
  spender: string,
  value: BigNumberish = constants.MaxUint256,
  deadline = constants.MaxUint256,
) {
  console.log('@@@@@@@ 3 @@@@@@@', ownerAddress);
  const nonce = await token.nonces(ownerAddress);
  console.log('@@@@@@@ 4 @@@@@@@');
  const name = await token.name();
  console.log('@@@@@@@ 5 @@@@@@@');
  const version = '1';
  const chainId = 80001;
  console.log('GetPermitSignature!!!!', nonce, name, version, chainId);

  const domain = {
    name,
    version,
    chainId,
    verifyingContract: token.address,
  };
  const types = {
    Permit: [
      {
        name: 'owner',
        type: 'address',
      },
      {
        name: 'spender',
        type: 'address',
      },
      {
        name: 'value',
        type: 'uint256',
      },
      {
        name: 'nonce',
        type: 'uint256',
      },
      {
        name: 'deadline',
        type: 'uint256',
      },
    ],
  };
  const val = {
    owner: ownerAddress,
    spender,
    value,
    nonce,
    deadline,
  };

  return ethers.utils.splitSignature(await owner._signTypedData(domain, types, val));
}
// ========================================================================

export default function NftMint() {
  type responseData = {
    metadata: IMetadata;
    token_url: string;
    token_id: number;
  };

  const { address: userAddress } = useAccount();
  const { data: signer } = useSigner();
  const [nonce, setNonce] = useState<BigNumber>(BigNumber.from(0));
  const [signature, setSignature] = useState<string>('');
  const [vrs, setVrs] = useState<any>({});
  const [respData, setRespData] = useState<response>();

  const descBgColor = useColorModeValue('gray.100', 'gray.600');

  // ========================================================================
  // const getVRS = async () => {
  //   console.log('@@@@@@@ 1 @@@@@@@');
  //   const frgContract = new ethers.Contract(process.env.NEXT_PUBLIC_FRG_ADDRESS, frgAbi, signer as Signer);
  //   const nonce = await frgContract.nonces(userAddress);
  //   console.log('@@@@@@@ 2 @@@@@@@', nonce);

  //   const { v, r, s } = await GetPermitSignature(
  //     userAddress,
  //     signer,
  //     frgContract,
  //     process.env.NEXT_PUBLIC_PET_ADDRESS,
  //     // TODO: Change to rate
  //     BigNumber.from(1),
  //     constants.MaxInt256,
  //   );
  //   return setVrs({ v, r, s });
  // };

  // const contractRead = useContractRead({
  //   address: process.env.NEXT_PUBLIC_FRG_ADDRESS,
  //   abi: frgAbi,
  //   functionName: 'nonces',
  //   args: [userAddress],
  //   onSuccess(data: BigNumber) {
  //     console.log('getnonce Success', data);
  //     setNonce;
  //   },
  // });

  // // Offchain signing on ERC20-permit function
  // const { data, isError, isLoading, isSuccess, signTypedData } = useSignTypedData({
  //   domain: {
  //     name: 'FRG Token',
  //     version: '1',
  //     chainId: 80001,
  //     verifyingContract: process.env.NEXT_PUBLIC_FRG_ADDRESS,
  //   },
  //   types: {
  //     Permit: [
  //       {
  //         name: 'owner',
  //         type: 'address',
  //       },
  //       {
  //         name: 'spender',
  //         type: 'address',
  //       },
  //       {
  //         name: 'value',
  //         type: 'uint256',
  //       },
  //       {
  //         name: 'nonce',
  //         type: 'uint256',
  //       },
  //       {
  //         name: 'deadline',
  //         type: 'uint256',
  //       },
  //     ],
  //   },
  //   value: {
  //     owner: userAddress as `0x${string}`,
  //     spender: process.env.NEXT_PUBLIC_PET_ADDRESS,
  //     value: BigNumber.from(1),
  //     nonce: nonce,
  //     deadline: constants.MaxInt256,
  //   },
  //   onSuccess: (signature: string) => {
  //     console.log('On success signature:', signature);
  //     setSignature(signature);
  //   },
  //   onError(error) {
  //     console.log('Error', error);
  //   },
  // });

  // // Function to mint NFT
  // const mintNft = async () => {
  //   // const { v, r, s } = ethers.utils.splitSignature(signature);
  //   // console.log('VRS', v, r, s, BigNumber.from(rate));
  //   console.log('SET VRS!!!', vrs);
  //   // signTypedData();
  //   const body = JSON.stringify({
  //     minterAddress: userAddress,
  //     v: vrs.v,
  //     r: vrs.r,
  //     s: vrs.s,
  //   });
  //   const ENDPOINT = '/api/v1/mint';
  //   console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}${ENDPOINT}/pet`);
  //   const response: {
  //     success: boolean;
  //     data: { metadata: IMetadata; token_url: string; token_id: number };
  //     error?: any;
  //   } = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${ENDPOINT}/pet` || '', {
  //     method: 'POST',
  //     headers: { 'content-type': 'application/json' },
  //     body,
  //   }).then((res) => res.json());
  //   console.log('response', response);
  // };
  // ==============================================================================================

  // function approve(address spender, uint256 amount)
  const { config, error } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_FRG_ADDRESS,
    abi: frgAbi,
    functionName: 'approve',
    args: [process.env.NEXT_PUBLIC_PET_ADDRESS, BigNumber.from(rate)],
  });
  const ContractLink = `https://mumbai.polygonscan.com/address/${process.env.NEXT_PUBLIC_PET_ADDRESS}`;

  const {
    data,
    isLoading,
    isSuccess,
    writeAsync: approveFrgSpending,
  } = useContractWrite({
    ...config,
    onSuccess(data) {
      console.log('getData Success', data);
    },
  });

  // // Function to mint NFT
  const mintNft = async () => {
    try {
      await approveFrgSpending?.();
      console.log('APPROVED');
    } catch (error) {
      console.error(error);
    } finally {
      const body = JSON.stringify({
        minterAddress: userAddress,
      });
      const ENDPOINT = '/api/v1/mint';
      console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}${ENDPOINT}/pet`);
      const response: {
        success: boolean;
        data: responseData;
        error?: any;
      } = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${ENDPOINT}/pet` || '', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body,
      }).then((res) => res.json());
      console.log('response', response);
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
          {/* <Logo height="5" /> */}
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
                  <Button colorScheme="teal" size="lg" width="xs" onClick={() => mintNft()}>
                    Mint Pet NFT
                  </Button>
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
