import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FC } from 'react';
import { resolveIPFS } from 'utils/resolveIPFS';
import { IResponseData } from '../../../interfaces/IMint';

export interface NFTCardParams {
  nft: IResponseData;
}

const NFTCardMint: FC<NFTCardParams> = ({ nft }) => {
  const bgColor = useColorModeValue('none', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const descBgColor = useColorModeValue('gray.100', 'gray.600');
  const OpenSeaCollectionLink = `https://testnets.opensea.io/assets/mumbai/${process.env.NEXT_PUBLIC_PET_ADDRESS}`;

  return (
    <>
      <Center>
        <Box
          maxWidth="400px"
          bgColor={bgColor}
          padding={3}
          borderRadius="xl"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <Box maxHeight="350px" overflow={'hidden'} borderRadius="xl">
            <Image src={resolveIPFS((nft.metadata as { image?: string })?.image)} alt={'nft'} />
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" noOfLines={1} marginTop={2}>
            {nft.metadata.name}
          </Box>
          <HStack alignItems={'center'}></HStack>
          <SimpleGrid columns={1} spacing={4} bgColor={descBgColor} padding={2.5} borderRadius="xl" marginTop={2}>
            <div>{`${nft.metadata.description}`}</div>
            <div>
              {nft.metadata.attributes.map((element) => (
                <div key={element.trait_type}>{`${element.trait_type}: ${element.value}`}</div>
              ))}
            </div>
          </SimpleGrid>
          <br />
        </Box>
      </Center>
      <Grid templateColumns="repeat(4, 1fr)" gap="3">
        <GridItem colSpan={1} w="100%">
          <Text fontSize="xs" textAlign="right" color={useColorModeValue('gray.600', 'gray.400')}>
            Opensea:
          </Text>
        </GridItem>
        <GridItem colSpan={3} w="100%">
          <Link
            href={`${OpenSeaCollectionLink}/${nft.token_id}`}
            isExternal
            fontSize="xs"
            textAlign="left"
            color={useColorModeValue('gray.600', 'gray.400')}
            textDecoration="underline"
          >
            {`${OpenSeaCollectionLink}/${nft.token_id}`} <ExternalLinkIcon />
          </Link>
        </GridItem>
        <GridItem colSpan={1} w="100%">
          <Text fontSize="xs" textAlign="right" color={useColorModeValue('gray.600', 'gray.400')}>
            Token URI:
          </Text>
        </GridItem>
        <GridItem colSpan={3} w="100%">
          <Link
            href={nft.token_url}
            isExternal
            fontSize="xs"
            textAlign="left"
            color={useColorModeValue('gray.600', 'gray.400')}
            textDecoration="underline"
          >
            {`${nft.token_url}`} <ExternalLinkIcon />
          </Link>
        </GridItem>
      </Grid>
    </>
  );
};

export default NFTCardMint;
