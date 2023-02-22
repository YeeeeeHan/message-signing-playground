import {
  Avatar,
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { getEllipsisTxt } from 'utils/format';
import { Address, useAccount, useBalance } from 'wagmi';

const ERC20Balances = () => {
  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');
  const { address: userAddress } = useAccount();
  const [tokenBalances, setTokenBalances] = useState<TokenBalances[]>([]);

  type TokenBalances = {
    token: {
      name: string;
      symbol: string;
      decimals: number;
      logo: string;
      contractAddress: {
        checksum: string;
      };
    };
    value: string;
  };

  // Fetch frg token balance
  const {
    data: frgData,
    // isError: frgError,
    // isLoading: frgLoading,
  } = useBalance({
    address: userAddress,
    token: process.env.NEXT_PUBLIC_FRG_ADDRESS as Address,
    watch: true,
  });

  // Fetch USDT token balance
  const {
    data: usdtData,
    // isError: usdtError,
    // isLoading: usdtLoading,
  } = useBalance({
    address: userAddress,
    token: process.env.NEXT_PUBLIC_USDT_ADDRESS as Address,
  });

  useEffect(() => {
    setTokenBalances([
      {
        token: {
          name: 'FireRock Gold',
          symbol: 'FRG',
          decimals: 18,
          logo: 'https://assets.coingecko.com/coins/images/15108/large/Frog.png?1628878089',
          contractAddress: {
            checksum: process.env.NEXT_PUBLIC_FRG_ADDRESS as string,
          },
        },
        value: Number(frgData?.formatted).toFixed(0),
      },
      {
        token: {
          name: 'USDT',
          symbol: 'USDT',
          decimals: 18,
          logo: 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707',
          contractAddress: {
            checksum: process.env.NEXT_PUBLIC_USDT_ADDRESS as string,
          },
        },
        value: Number(usdtData?.formatted).toFixed(0),
      },
    ]);
  }, [frgData, usdtData]);

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={2} h="10">
          <Heading size="lg" marginBottom={6}>
            ERC20 Balances
          </Heading>
        </GridItem>
        <GridItem colStart={4} colEnd={6} h="10"></GridItem>
      </Grid>
      {tokenBalances?.length ? (
        <Box border="2px" borderColor={hoverTrColor} borderRadius="xl" padding="24px 18px">
          <TableContainer w={'full'}>
            <Table>
              <Thead>
                <Tr>
                  <Th>Token</Th>
                  <Th>Balance</Th>
                  <Th></Th>
                  <Th isNumeric>Address</Th>
                </Tr>
              </Thead>
              <Tbody>
                {tokenBalances?.map(({ token, value }, key) => (
                  <Tr key={`${token?.symbol}-${key}-tr`} _hover={{ bgColor: hoverTrColor }} cursor="pointer">
                    <Td>
                      <HStack>
                        <Avatar size="sm" src={token?.logo || ''} name={token?.name} />
                        <VStack alignItems={'flex-start'}>
                          <Text as={'span'}>{token?.name}</Text>
                          <Text fontSize={'xs'} as={'span'}>
                            {token?.symbol}
                          </Text>
                        </VStack>
                      </HStack>
                    </Td>
                    <Td>{value}</Td>
                    <Td>
                      {token?.symbol === 'FRG' && (
                        <Button size="sm" colorScheme="green" onClick={() => router.push('/purchase/frg')}>
                          Purchase $FRG
                        </Button>
                      )}
                    </Td>
                    <Td isNumeric>{getEllipsisTxt(token?.contractAddress.checksum)}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <Box>Looks Like you do not have any ERC20 tokens</Box>
      )}
    </>
  );
};

export default ERC20Balances;
