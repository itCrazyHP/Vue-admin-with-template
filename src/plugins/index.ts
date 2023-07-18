import { App } from "vue";
import { setupTailwindcss } from "./tailwindcss";
import _ from "lodash"
import setupElementPlus from "./elementui";
import setupPinia from "./pinia";
import setupIconPark from "./iconPark";
import setupMitt from "./mitt";
export function setupPlugins(app:App){
    setupTailwindcss()
    // autoRegisterComponent(app)
    setupElementPlus(app)
    setupPinia(app)
    setupIconPark(app)
    setupMitt(app)
}
