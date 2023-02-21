import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IMetadata } from '../interfaces/IMint';

const ENDPOINT = '/api/v1/mint';
const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}${ENDPOINT}/pet`;

const mintNftWithAddress = async (userAddress) => {
  try {
    const body = JSON.stringify({
      minterAddress: userAddress,
    });
    let response: {
      success: boolean;
      data: { metadata: IMetadata; token_url: string; token_id: number };
      error?: any;
    };

    response = await axios.post(API_URL, body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const UseMintNft = (userAddress) => {
  return useQuery({
    queryKey: ['mintnft'],
    queryFn: () => mintNftWithAddress(userAddress),
  });
};

export { UseMintNft };
