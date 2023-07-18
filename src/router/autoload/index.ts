import util from "@/utils";
import getRoutes from "./view"
import { RouteRecordRaw, Router } from "vue-router";
import autoloadModuleRoutes from "./module";
import userStore from "@/store/userStore";
let routes = [] as RouteRecordRaw[]
if(util.env.VITE_ROUTER_AUTOLOAD){
    routes=getRoutes()
}else{
    routes = autoloadModuleRoutes()
}

function autoload(router:Router){
    const user = userStore()
    routes = routes.map(route=>{
        route.children = route.children?.filter(r=>{
            const permission = r.meta?.permission     
            return permission?user.info?.permissions.includes(permission) : true //没有permission返回true表示符合条件不需要权限的路由，有permission进入判断，用户拥有的权限中是否包含该权限，有返回true没返回false
        })
        return route
    })
    routes.forEach(route=>{
        router.addRoute(route)}
    )
}
export default autoload