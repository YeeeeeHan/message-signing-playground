import React from 'react';
import { sequenceWallet } from '@0xsequence/rainbowkit-plugin';
import { RainbowKitProvider, getDefaultWallets, connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
  metaMaskWallet,
} from '@rainbow-me/rainbowkit/wallets';

import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, goerli, polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider, webSocketProvider } = configureChains([polygonMumbai, goerli], [publicProvider()]);

const { wallets } = getDefaultWallets({
  appName: 'RainbowKit demo',
  chains,
});

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
            bannerUrl: `${window.location.origin}/xy3logo.png`, // Note: Does not work on localhost, but works on external server
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
