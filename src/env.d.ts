/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly VITE_GRAPHQL_ENDPOINT: string
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
  }
