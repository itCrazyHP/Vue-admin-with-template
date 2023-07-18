/// <reference types="vite/client" />
declare module '*.vue' {//ts无法识别.vue文件报错，加下边去除报错
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
