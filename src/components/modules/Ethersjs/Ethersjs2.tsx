import { Button, Container, Text } from '@chakra-ui/react';
import { ethers } from 'ethers';
import process from 'process';
import { useState } from 'react';

export default function EthersJs2() {
  const [signature, setSignature] = useState('');
  const [signer, setSigner] = useState('');

  async function privateKey() {
    try {
      const jsonRpcProvider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_DEV_ALCHEMY);
      const walletInst = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY, jsonRpcProvider);

      // The hash we wish to sign and verify
      let messageHash = ethers.utils.id('Hello World');
      let messageHashBytes = ethers.utils.arrayify(messageHash);

      // Sign the binary data
      let flatSig = await walletInst.signMessage(messageHashBytes);

      // For Solidity, we need the expanded-format of a signature
      let expandedSignature = ethers.utils.splitSignature(flatSig);

      // Call the recoverAddress function
      const signer = ethers.utils.recoverAddress(messageHash, {
        v: expandedSignature.v,
        r: expandedSignature.r,
        s: expandedSignature.s,
      });
      setSignature(JSON.stringify(expandedSignature, null, '\t'));
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
        <Text fontSize="xs">Expanded Signature:</Text>
        <Text fontSize="xs">
          <pre id="json">{signature}</pre>
        </Text>
        <br />
        <Text fontSize="xs" align="left">
          Signer: {signer}
        </Text>
      </Container>
    </>
  );
}
