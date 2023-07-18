import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router,{setup} from '@/router'
import { setupPlugins } from './plugins'
import "animate.css"
async function bootstrap() {
    const app = createApp(App)
    setupPlugins(app)
    setup(app)
    await router.isReady()
    app.mount('#app')
}
bootstrap()
