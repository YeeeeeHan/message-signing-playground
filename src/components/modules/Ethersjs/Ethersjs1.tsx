import { Button, Container, Text } from '@chakra-ui/react';
import { ethers } from 'ethers';
import { hashMessage } from 'ethers/lib/utils.js';
import process from 'process';
import { useState } from 'react';

export default function EthersJs1() {
  const [signature, setSignature] = useState('');
  const [signer, setSigner] = useState('');

  async function privateKey() {
    try {
      const walletInst = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY);
      // ===============================[1]=========================================
      const message = 'hello';
      console.log('[1] message', message);
      const signature = await walletInst.signMessage(message);
      console.log('[1] signature', signature);
      const hashedMessage = hashMessage(message);
      console.log('[1] hashedMessage', hashedMessage);
      const signer = ethers.utils.recoverAddress(hashedMessage, signature);
      console.log('[1] signer', signer);
      // ===============================[2]=========================================
      const messageHash = ethers.utils.id('hello');
      console.log('[2] messageHash', messageHash);
      const messageHashBytes = ethers.utils.arrayify(messageHash);
      console.log('[2] messageHashBytes', messageHashBytes);
      const signature2 = await walletInst.signMessage(messageHashBytes);
      console.log('[2] signature2', signature2);
      const signer2 = ethers.utils.verifyMessage(messageHashBytes, signature2);
      console.log('[2] signer2', signer2);
      // ===============================[2]=========================================
      const messageHash3 = ethers.utils.id('hello');
      console.log('[3] messageHash3', messageHash3);
      const messageHashBytes3 = ethers.utils.arrayify(messageHash);
      console.log('[3] messageHashBytes3', messageHashBytes3);
      const signature3 = await walletInst.signMessage(messageHashBytes);
      console.log('[2] signature3', signature3);
      const expandedSignature = ethers.utils.splitSignature(signature3);
      console.log('[3] expandedSignature', expandedSignature);
      const signer3 = ethers.utils.recoverAddress(messageHashBytes, {
        v: expandedSignature.v,
        r: expandedSignature.r,
        s: expandedSignature.s,
      });
      console.log('[3] signer3', signer3);

      setSignature(signature);
      setSigner(signer);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Text>EtherJs</Text>
      <Button
        colorScheme="teal"
        variant="outline"
        onClick={() => {
          privateKey();
        }}
      >
        Sign
      </Button>
      <Container>
        <Text fontSize="xs">Flat signature: {signature}</Text>
        <br />
        <Text fontSize="xs" align="left">
          Signer: {signer}
        </Text>
      </Container>
    </>
  );
}
