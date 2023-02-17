import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Grid,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEvmWalletNFTs } from '@moralisweb3/next';
import NftMint from 'components/modules/Payment/nftMint';
import { useEffect } from 'react';
import { useAccount, useNetwork } from 'wagmi';

const NftPurchase = () => {
  const { chain } = useNetwork();
  const { address: userAddress } = useAccount();
  const { data: nfts } = useEvmWalletNFTs({
    address: userAddress as string,
    chain: chain?.id,
  });

  return <NftMint />;
};

export default NftPurchase;
