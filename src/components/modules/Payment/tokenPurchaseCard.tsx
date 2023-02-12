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
import { NFTCard } from 'components/modules';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useAccount, useNetwork } from 'wagmi';
import Gpay from 'components/modules/Payment/gpay';

const TokenPurchaseCard = () => {
  return (
    <Center py={6}>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Stack textAlign={'center'} p={6} color={useColorModeValue('gray.800', 'white')} align={'center'}>
          {/* <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}
          >
            Hobby
          </Text> */}
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

          {/* <Button
            mt={10}
            w={'full'}
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
            Start your trial
          </Button> */}
          <Gpay />
        </Box>
      </Box>
    </Center>
  );
};

export default TokenPurchaseCard;
