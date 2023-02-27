import { sequenceWallet } from '@0xsequence/rainbowkit-plugin';
import { connectorsForWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { metaMaskWallet, rainbowWallet } from '@rainbow-me/rainbowkit/wallets';
import React from 'react';

import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { goerli, polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider, webSocketProvider } = configureChains([polygonMumbai, goerli], [publicProvider()]);

const connectors = connectorsForWallets([
  {
    groupName: 'Custom Wallets',
    wallets: [
      sequenceWallet({
        chains,
        connect: {
          app: 'XY3 Token Marketplace',
          networkId: polygonMumbai.id,
          authorize: false,
          askForEmail: true,
          refresh: true,
          settings: {
            // Specify signInWithEmail with an email address to allow user automatically sign in with the email option.
            // signInWithEmail: 'user@email.com',
            // Specify signInOptions to pick the available sign in options.
            signInOptions: ['email', 'google', 'apple'],
            theme: 'goldDark',
            bannerUrl: '/logo.png',
            includedPaymentProviders: ['moonpay'],
            defaultFundingCurrency: 'matic',
            defaultPurchaseAmount: 111,
          },
        },
      }),
      rainbowWallet({ chains }),
      metaMaskWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

interface RainbowKitWrapperProps {
  children: React.ReactNode;
}

function RainbowKitWrapper({ children }: RainbowKitWrapperProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  );
}

export default RainbowKitWrapper;
