import { RouteRecordRaw } from 'vue-router'
import util from '@/utils'
const layouts = import.meta.glob('../../layouts/*.vue', { eager: true })
const views = import.meta.glob('../../views/**/*.vue', { eager: true })

function getRoutes(){
    const layoutsRoutes = [] as RouteRecordRaw[]
    Object.entries(layouts).forEach(([file, module]) => { 
        
     const route = getRouteByModule(file, module as  { [key: string]: any }) 
     const children = getChildrenRoute(route)
     route.children=children
     
     layoutsRoutes.push(route)
})
    return util.env.VITE_ROUTER_AUTOLOAD? layoutsRoutes:[]
}



function getChildrenRoute(layoutRoute:RouteRecordRaw){
    const routes = [] as RouteRecordRaw[]
    Object.entries(views).forEach(([file, module]) =>{
        if(file.includes(`../views/${layoutRoute.name as string}`)){
            const route = getRouteByModule(file,module as  { [key: string]: any })
            routes.push(route)
        }
    })
    return routes
}

function getRouteByModule(file: string, module: { [key: string]: any }) {
    const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi,'')
    
    const route = {
        name:name.replace('/','-'),
        path:`/${name}`,
        component:module.default,
    }as RouteRecordRaw
    
    return Object.assign(route, module.default?.route); //Object.assign方法合并对象，共有的值后边覆盖前边；module.default取出定义的path覆盖原本的path

}




export default getRoutes