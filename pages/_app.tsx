import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { connectorsForWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { metaMaskWallet, rainbowWallet } from '@rainbow-me/rainbowkit/wallets';

import '@rainbow-me/rainbowkit/styles.css';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

import { useState } from 'react';

import { configureChains, createClient, goerli, WagmiConfig } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

const { chains, provider, webSocketProvider } = configureChains([polygonMumbai, goerli], [publicProvider()]);
const connectors = connectorsForWallets([
  {
    groupName: 'Custom Wallets',
    wallets: [rainbowWallet({ chains }), metaMaskWallet({ chains })],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <ChakraProvider resetCSS theme={theme}>
              <SessionProvider session={pageProps.session} refetchInterval={0}>
                <Component {...pageProps} />
              </SessionProvider>
            </ChakraProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default MyApp;
