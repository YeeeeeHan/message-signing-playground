import { CheckCircleIcon, SettingsIcon } from '@chakra-ui/icons';
import { Heading, List, ListIcon, ListItem, VStack } from '@chakra-ui/react';
import EthersJs1 from 'components/modules/Ethersjs/Ethersjs1';
import EthersJs2 from 'components/modules/Ethersjs/Ethersjs2';

const Home = () => {
  return (
    <VStack w={'full'}>
      <EthersJs1 />
      <EthersJs2 />
      {/* <Web3js /> */}
      <Heading size="md" marginBottom={6}>
        Ethereum Boilerplate
      </Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Moralis authentication
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display Transactions
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display ERC20 transfers
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display ERC20 balances
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display NFT balances
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display NFT transfers
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Multichain Support
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Using Moralis from client-side
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Adding explorer links to balances, transactions ...
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Better responsive design
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Rainbowkit integration
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          ... and more
        </ListItem>
      </List>
    </VStack>
  );
};

export default Home;
