import { RouteRecordRaw } from "vue-router";

export default function autoloadModuleRoutes(){
    let modules =import.meta.glob('../module/**/*.ts',{eager:true}) as Record<string, any>
    const routes = [] as RouteRecordRaw[]
    Object.keys(modules).forEach(key=>{
        routes.push(modules[key].default)
    })
    return routes
}