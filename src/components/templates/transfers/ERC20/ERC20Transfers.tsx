import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEvmWalletTokenTransfers } from '@moralisweb3/next';
import { useEffect } from 'react';
import { getEllipsisTxt } from 'utils/format';
import { useAccount, useNetwork } from 'wagmi';

const ERC20Transfers = () => {
  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');
  const { chain } = useNetwork();
  const { address: userAddress } = useAccount();
  const { data: transfers } = useEvmWalletTokenTransfers({
    address: userAddress as string,
    chain: chain?.id,
  });

  useEffect(() => console.log('transfers: ', transfers), [transfers]);

  return (
    <>
      <Heading size="lg" marginBottom={6}>
        ERC20 Transfers
      </Heading>
      {transfers?.length ? (
        <Box border="2px" borderColor={hoverTrColor} borderRadius="xl" padding="24px 18px">
          <TableContainer w={'full'}>
            <Table>
              <Thead>
                <Tr>
                  <Th>Token</Th>
                  <Th>From</Th>
                  <Th>To</Th>
                  <Th>Date</Th>
                  <Th isNumeric>Value</Th>
                </Tr>
              </Thead>
              <Tbody>
                {transfers?.map((transfer, key) => (
                  <Tr key={key} _hover={{ bgColor: hoverTrColor }} cursor="pointer">
                    <Td>{getEllipsisTxt(transfer?.address.checksum)}</Td>
                    <Td>{getEllipsisTxt(transfer?.fromAddress.checksum)}</Td>
                    <Td>{getEllipsisTxt(transfer?.toAddress.checksum)}</Td>
                    <Td>{new Date(transfer.blockTimestamp).toLocaleDateString()}</Td>
                    <Td isNumeric>{transfer.value.toString()}</Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Token</Th>
                  <Th>From</Th>
                  <Th>To</Th>
                  <Th>Date</Th>
                  <Th isNumeric>Value</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <Box>Looks Like you do not have any ERC20 Transfers</Box>
      )}
    </>
  );
};

export default ERC20Transfers;
