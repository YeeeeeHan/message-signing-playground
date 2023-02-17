declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_FRG_ADDRESS: `0x${string}`;
      NEXT_PUBLIC_PET_ADDRESS: `0x${string}`;
      NEXT_PUBLIC_BACKEND_URL: string;
      // DB_PORT: number;
      // ENV: "test" | "dev" | "prod";
    }
  }
}

export {};
