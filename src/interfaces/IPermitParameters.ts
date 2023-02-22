import { BigNumber } from 'ethers';
import { TypedData, TypedDataDomain, TypedDataParameter } from 'abitype';

type types = {
  Permit: [
    {
      name: string;
      type: string;
    },
    {
      name: string;
      type: string;
    },
    {
      name: string;
      type: string;
    },
    {
      name: string;
      type: string;
    },
    {
      name: string;
      type: string;
    },
  ];
};

type value = {
  owner: `0x${string}`;
  spender: `0x${string}`;
  value: BigNumber;
  nonce: BigNumber;
  deadline: BigNumber;
};

export interface ITypedData {
  domain: TypedDataDomain;
  types: TypedDataParameter;
  value: TypedData;
}
