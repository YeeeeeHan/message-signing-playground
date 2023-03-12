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
      const stringMessage = 'hello';
      const stringSignature = await walletInst.signMessage(stringMessage);

      // The Ethereum Identity function computes the KECCAK256 hash of the text bytes.
      const bytesMessage = ethers.utils.id('0xf89804fb5037d25b0db38a99a78c487755af1fe9');
      const bytesArray = ethers.utils.arrayify(bytesMessage);
      const bytesSignature = await walletInst.signMessage(bytesArray);

      // Returns the KECCAK256 digest aBytesLike.
      const keccak = ethers.utils.keccak256('0xf89804fb5037d25b0db38a99a78c487755af1fe9');

      console.log(stringMessage);
      console.log(bytesMessage);
      console.log(keccak);

      // ===============================[1] string =========================================
      const signer = ethers.utils.recoverAddress(hashMessage(stringMessage), stringSignature);
      // same as: const signer2 = ethers.utils.verifyMessage(stringMessage, stringSignature);

      console.log('[1] signer', signer);
      // ===============================[2]  bytes =========================================
      const signer2 = ethers.utils.recoverAddress(hashMessage(bytesArray), bytesSignature);
      // same as: const signer2 = ethers.utils.verifyMessage(bytesArray, bytesSignature);

      console.log('[2] signer2', signer2);
      // ===============================[3] ethers.Wallet.signMessage + utils.splitSignature =========================================
      const expandedSignature = ethers.utils.splitSignature(stringSignature);

      console.log('[3] expandedSignature', expandedSignature);
      const signer3 = ethers.utils.recoverAddress(hashMessage(stringMessage), {
        v: expandedSignature.v,
        r: expandedSignature.r,
        s: expandedSignature.s,
      });
      console.log('[3] signer3', signer3, '\n');
      // ===============================[4] ethereumjs-util =========================================
      const msgHex = bufferToHex(Buffer.from(stringMessage));
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
