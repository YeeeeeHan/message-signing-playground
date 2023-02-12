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
import { useEffect } from 'react';
import { useAccount, useNetwork } from 'wagmi';
import Gpay from 'components/modules/Payment/gpay';
import TokenPurchaseCard from 'components/modules/Payment/tokenPurchaseCard';

const FrgPurchase = () => {
  const { chain } = useNetwork();
  const { address: userAddress } = useAccount();
  const { data: nfts } = useEvmWalletNFTs({
    address: userAddress as string,
    chain: chain?.id,
  });

  return <TokenPurchaseCard />;
};

export default FrgPurchase;
