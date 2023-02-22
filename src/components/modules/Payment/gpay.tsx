import React from 'react';
import GooglePayButton from '@google-pay/button-react';
import { useAccount, useSigner } from 'wagmi';

interface Propsp {
  mintFn: () => void;
}

export default function Gpay({ mintFn }: Propsp) {
  const { address: userAddress } = useAccount();
  const { data: signer } = useSigner();

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
        mintFn?.();
        console.log('mintToken()');
      }}
    />
  );
}
