declare global {
    namespace NodeJS {
      interface ProcessEnv {
        API_URI: string;
      }
    }
  }
  
  export {};