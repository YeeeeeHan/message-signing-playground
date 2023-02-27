import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const YeeHanLogo = () => {
  const { colorMode } = useColorMode();

  return <Image src={colorMode === 'dark' ? '/logo.png' : '/logo.png'} height={45} width={150} alt="Moralis" />;
};

export default YeeHanLogo;
