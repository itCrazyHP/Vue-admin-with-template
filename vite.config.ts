import { ConfigEnv, build, loadEnv } from 'vite'
import path from 'path'
import {parseEnv} from './vite/utils'
import setupPlugins from './vite/plugins/index'
import { visualizer } from "rollup-plugin-visualizer";



export default ({ command, mode }:ConfigEnv) => {
  const isBuild = command ==='build'
  const env = parseEnv(loadEnv(mode,'.'))//取出.env文件,并调用转换方法
  
  return {
    plugins: [...setupPlugins(isBuild,env),visualizer()],
    resolve: {
      alias: { '@': path.resolve(__dirname, 'src'),  '#': path.resolve(__dirname, 'types'),},
    },
    build:{
      rollupOptions:{
        emptyOutDir:true,
        output:{
          manualChunks(id:string){
            if(id.includes('node_modules')){
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      }
    },
    server:{
      proxy:{
        '/api':{
          target:env.VITE_API_URL,
          changeOrigin:true,
          rewrite:(path:string)=>path.replace(/^\/api/,'')
        },
        '/mock':{
          target:'/mock',
          changeOrigin:true,
          rewrite:(path:string)=>path.replace(/^\/api/,'')
        }
      }
    }
  }
}


