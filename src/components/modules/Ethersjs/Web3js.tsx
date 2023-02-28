import { Button, Container, Text } from '@chakra-ui/react';
import { bufferToHex, ecrecover, ecsign, hashPersonalMessage, publicToAddress, toBuffer } from 'ethereumjs-util';
import process from 'process';
import { useState } from 'react';

export default function Web3js() {
  const [signature, setSignature] = useState('');
  const [signer, setSigner] = useState('');
  const [v, setV] = useState(0);
  const [r, setR] = useState('');
  const [s, setS] = useState('');

  async function privateKey() {
    try {
      const message = 'hello';
      const msgHex = bufferToHex(Buffer.from(message));
      const msgBuffer = toBuffer(msgHex);
      const prefixedHashBuffer = hashPersonalMessage(msgBuffer);
      const prefixedHash = bufferToHex(prefixedHashBuffer);
      setSignature(prefixedHash);

      const privateKey = toBuffer('0x' + process.env.NEXT_PUBLIC_PRIVATE_KEY);
      const signatureFromEcsign = ecsign(prefixedHashBuffer, privateKey);

      const publicKey = ecrecover(
        prefixedHashBuffer,
        signatureFromEcsign.v,
        signatureFromEcsign.r,
        signatureFromEcsign.s,
      );
      setV(signatureFromEcsign.v);
      setR(bufferToHex(signatureFromEcsign.r));
      setS(bufferToHex(signatureFromEcsign.s));
      const sender = publicToAddress(publicKey);
      const signer = bufferToHex(sender);

      setSigner(signer);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Text>Eth utils</Text>
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
        <Text fontSize="xs" align="left">
          Signer: {signer}
        </Text>
        <br />
        <Text fontSize="xs">Signature: {signature}</Text>
        <Text fontSize="xs">V: {v}</Text>
        <Text fontSize="xs">R: {r}</Text>
        <Text fontSize="xs">S: {s}</Text>
      </Container>{' '}
    </>
  );
}
