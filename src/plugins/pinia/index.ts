import { App } from "vue";
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
export default function setupPinia(app:App){
    const pinia = createPinia()
    pinia.use(piniaPluginPersistedstate)
    app.use(pinia)
}