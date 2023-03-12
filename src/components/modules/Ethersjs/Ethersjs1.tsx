import { Button, Container, Text } from '@chakra-ui/react';
import { bufferToHex, ecrecover, ecsign, hashPersonalMessage, publicToAddress, toBuffer } from 'ethereumjs-util';
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
      const message = 'hello';
      // ===============================[1] ethers.Wallet.signMessage + utils.recoverAddress =========================================
      const signature = await walletInst.signMessage(message);
      console.log('[1] signature', signature);
      const hashedMessage = hashMessage(message);
      console.log('[1] hashedMessage', hashedMessage);

      const signer = ethers.utils.recoverAddress(hashMessage(message), signature);
      console.log('[1] signer', signer);
      console.log('\n');
      // ===============================[2] ethers.Wallet.signMessage + utils.Arrayify + utils.verifyMessage =========================================
      const signature2 = await walletInst.signMessage(message);
      console.log('[2] signature2', signature2);

      const signer2 = ethers.utils.verifyMessage(message, signature2);
      console.log('[2] signer2', signer2);
      console.log('\n');

      const messageHash25 = ethers.utils.id('hello');
      console.log('[25] messageHash', messageHash25);
      const messageHashBytes25 = ethers.utils.arrayify(messageHash25);
      console.log('[25] messageHashBytes', messageHashBytes25);
      const signature25 = await walletInst.signMessage(messageHashBytes25);
      console.log('[25] signature2', signature25);
      const signer25 = ethers.utils.verifyMessage(messageHashBytes25, signature25);
      console.log('[25] signer25', signer25);
      console.log('\n');
      // ===============================[3] ethers.Wallet.signMessage + utils.splitSignature =========================================
      const signature3 = await walletInst.signMessage(message);
      console.log('[2] signature3', signature3);
      const expandedSignature = ethers.utils.splitSignature(signature3);

      console.log('[3] expandedSignature', expandedSignature);
      const signer3 = ethers.utils.recoverAddress(hashMessage(message), {
        v: expandedSignature.v,
        r: expandedSignature.r,
        s: expandedSignature.s,
      });
      console.log('[3] signer3', signer3);
      console.log('\n');
      // ===============================[4] ethereumjs-util =========================================
      const msgHex = bufferToHex(Buffer.from(message));
      console.log('[4] msgHex', msgHex);
      const msgBuffer = toBuffer(msgHex);
      const prefixedHashBuffer = hashPersonalMessage(msgBuffer);
      const prefixedHash = bufferToHex(prefixedHashBuffer);
      console.log('[4] prefixedHash', prefixedHash);

      const privateKey = toBuffer('0x' + process.env.NEXT_PUBLIC_PRIVATE_KEY);
      const signatureFromEcsign = ecsign(prefixedHashBuffer, privateKey);

      const publicKey = ecrecover(
        prefixedHashBuffer,
        signatureFromEcsign.v,
        signatureFromEcsign.r,
        signatureFromEcsign.s,
      );
      console.log('[4] signatureFromEcsign.v', signatureFromEcsign.v);
      console.log('[4] bufferToHex(signatureFromEcsign.r)', bufferToHex(signatureFromEcsign.r));
      console.log('[4] bufferToHex(signatureFromEcsign.s)', bufferToHex(signatureFromEcsign.s));
      const sender = publicToAddress(publicKey);
      const signer4 = bufferToHex(sender);
      console.log('[4] signer4', signer4);
      console.log('\n');

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
