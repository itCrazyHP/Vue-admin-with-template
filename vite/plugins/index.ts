import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'
import setupMockPlugin from './mock'
import { setupElmentPlugin } from './element'
export default function setupPlugin(isBuild:boolean,env:Record<string, any>){
    const plugins:Plugin[] = [vue()]
    plugins.push(setupMockPlugin(isBuild))
    setupElmentPlugin(plugins)
    return plugins
}
