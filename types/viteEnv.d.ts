interface ViteEnv {
    VITE_SOME_KEY:number 
    VITE_ROUTER_AUTOLOAD:boolean 
    VITE_API_URL:string 
    VITE_MOCK_ENABLE:boolean
}

interface ImportMetaEnv extends ViteEnv{
  VITE_SOME_KEY:number 
    VITE_ROUTER_AUTOLOAD:boolean 
    VITE_API_URL:string 
    VITE_MOCK_ENABLE:boolean
}
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }



