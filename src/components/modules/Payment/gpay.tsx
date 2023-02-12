import React from 'react';
import GooglePayButton from '@google-pay/button-react';
import { useAccount, useSigner, useBalance, Address, useContract } from 'wagmi';
import { abi } from 'contract_assets/Frg.json';
import { BigNumber } from 'ethers';

type Props = {
  mintFunction: () => void;
};

export default function Gpay() {
  const { address: userAddress } = useAccount();
  const { data: signer, isError, isLoading } = useSigner();

  // // Fetch frg token balance
  // const {
  //   data: frgData,
  //   isError: frgError,
  //   isLoading: frgLoading,
  // } = useBalance({
  //   address: userAddress,
  //   token: process.env.NEXT_PUBLIC_FRG_ADDRESS as Address,
  // });
  // // Fetch USDT token balance
  // const {
  //   data: usdtData,
  //   isError: usdtError,
  //   isLoading: usdtLoading,
  // } = useBalance({
  //   address: userAddress,
  //   token: process.env.NEXT_PUBLIC_USDT_ADDRESS as Address,
  // });

  //Contract intractions
  const contract = useContract({
    address: process.env.NEXT_PUBLIC_FRG_ADDRESS,
    abi,
    signerOrProvider: signer,
  });

  // Function to mint FRG
  const mint = async () => {
    const decimals = await contract?.decimals();
    const DECIMAL = BigNumber.from(10).pow(decimals);
    const mintAmount = BigNumber.from(10).mul(DECIMAL);
    contract?.mint(userAddress, mintAmount);
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
