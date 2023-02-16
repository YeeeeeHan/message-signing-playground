import React, { useEffect, useState } from 'react';
import { useAccount, useSigner, useBalance, Address, useContract, useSignTypedData, useContractRead } from 'wagmi';
import { abi as frgAbi } from '../../../../artifacts/contracts/erc20tokens/Frg.sol/Frg.json';
import { abi as petAbi } from '../../../../artifacts/contracts/nfts/Pet.sol/Pet.json';
import { BigNumber, BigNumberish, constants, Contract, ethers, Wallet, Signer } from 'ethers';
import { Frg, Pet } from '../../../../typechain-types';
import { IMetadata } from '../../../../interfaces/IMint';
import frg from '../../../../pages/purchase/frg';
import { ITypedData } from '../../../../interfaces/IPermitParameters';
import { TypedData } from '0xsequence/dist/declarations/src/utils';
import { TypedDataType, TypedData } from 'abitype';

function GetPermitSignature(userAddress: `0x${string}`, nonce: BigNumber): ITypedData {
  const domain = {
    name: 'Frg Token',
    version: '1',
    chainId: 80001,
    verifyingContract: process.env.NEXT_PUBLIC_FRG_ADDRESS,
  } as const;

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
  } as const;

  const value = {
    owner: userAddress as `0x${string}`,
    spender: process.env.NEXT_PUBLIC_PET_ADDRESS,
    value: BigNumber.from(10),
    nonce: BigNumber.from(0),
    deadline: constants.MaxInt256,
  } as const;
  return { domain, types, value };
}

export default function NftMint() {
  const { address: userAddress } = useAccount();
  const { data: signer } = useSigner();
  const [nonce, setNonce] = useState<BigNumber>(BigNumber.from(0));
  const [permitParams, setPermitParams] = useState<ITypedData>({} as ITypedData);

  const contractRead = useContractRead({
    address: process.env.NEXT_PUBLIC_FRG_ADDRESS,
    abi: frgAbi,
    functionName: 'nonces',
    args: [userAddress],
    onSuccess(data: BigNumber) {
      console.log('getnonce Success', data);
      setNonce;
      setPermitParams(GetPermitSignature(userAddress!, data));
    },
  });

  const frgContract = useContract({
    address: process.env.NEXT_PUBLIC_FRG_ADDRESS,
    abi: frgAbi,
    signerOrProvider: signer,
  }) as Contract | Frg;

  const { data, isError, isLoading, isSuccess, signTypedData } = useSignTypedData({
    domain: permitParams.domain,
    types: permitParams.types,
    value: permitParams.value,
    onError(error) {
      console.log('Error', error);
    },
  });
  // Function to mint FRG
  const mintNft = async () => {
    const body = JSON.stringify({ minterAddress: userAddress });
    const ENDPOINT = '/api/v1/mint';
    console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}${ENDPOINT}/pet`);
    const response: {
      success: boolean;
      data: { metadata: IMetadata; token_url: string; token_id: number };
      error?: any;
    } = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${ENDPOINT}/pet` || '', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body,
    }).then((res) => res.json());
    console.log('@@@@@@@@@@@', response);
  };

  return (
    <div>
      <button disabled={isLoading} onClick={() => signTypedData()}>
        Sign typed data
      </button>
      {isSuccess && <div>Signature: {data}</div>}
      {isError && <div>Error signing message</div>}
    </div>
  );
}
