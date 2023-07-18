import { App } from "vue"

import mitt from 'mitt'
//定义
const Mit = mitt()

declare module 'vue' {
    export interface ComponentCustomProperties{
        $Bus: typeof Mit
    }
}
//使用


export default function setupMitt(app:App){
    app.config.globalProperties.$Bus = Mit
}