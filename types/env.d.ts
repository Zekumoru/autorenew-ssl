declare global {
  namespace NodeJS {
    interface ProcessEnv
      extends Partial<{
        NODE_ENV: 'development' | 'production';
        PORKBUN_API_KEY: string;
        PORKBUN_SECRET_KEY: string;
      }> {}
  }
}

export {};
