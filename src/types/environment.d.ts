declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_FRG_ADDRESS: `0x${string}`;
      NEXT_PUBLIC_PET_ADDRESS: `0x${string}`;
      NEXT_PUBLIC_DEPLOYER_ADDRESS: `0x${string}`;
      NEXT_PUBLIC_BACKEND_URL: string;
      NEXT_PUBLIC_DEV_ALCHEMY: string;
      NEXT_PUBLIC_PRIVATE_KEY: string;
    }
  }
}

export {};
