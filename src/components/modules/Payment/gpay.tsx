import React from 'react';
import GooglePayButton from '@google-pay/button-react';
import { useAccount, useSigner, useBalance, Address, useContract, useMutation } from 'wagmi';
import { abi } from 'contract_assets/Frg.json';
import { BigNumber, Contract } from 'ethers';
import router from 'next/router';

type Props = {
  mintFunction: () => void;
};

export default function Gpay() {
  const { address: userAddress } = useAccount();
  const { data: signer } = useSigner();

  //Contract intractions
  const contract = useContract({
    address: process.env.NEXT_PUBLIC_FRG_ADDRESS,
    abi,
    signerOrProvider: signer,
  });

  interface mintERC20Variables {
    contract: Contract;
    userAddress: `0x${string}`;
    mintAmount: number;
  }

  const mintFunction = async ({ userAddress }: mintERC20Variables) => {
    const decimals = await contract?.decimals();
    const DECIMAL = BigNumber.from(10).pow(decimals);
    const mintAmount = BigNumber.from(10).mul(DECIMAL);
    await contract?.mint(userAddress, mintAmount);
  };
  const { isLoading, mutateAsync } = useMutation(mintFunction, {
    onSuccess: (data) => {},
    onError: (error) => {},
  });
  const mint = async () => {
    try {
      const decimals = await contract?.decimals();
      const DECIMAL = BigNumber.from(10).pow(decimals);
      const mintAmount = BigNumber.from(10).mul(DECIMAL);
      await mutateAsync({ userAddress, mintAmount });
      router.push('/balances/erc20');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GooglePayButton
      environment="TEST"
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA'],
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'example',
                gatewayMerchantId: 'exampleGatewayMerchantId',
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: '12345678901234567890',
          merchantName: 'Demo Merchant',
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: '100.00',
          currencyCode: 'USD',
          countryCode: 'US',
        },
      }}
      onLoadPaymentData={(paymentRequest: google.payments.api.PaymentData) => {
        mint();
        console.log('Finished Minting');
      }}
    />
  );
}
