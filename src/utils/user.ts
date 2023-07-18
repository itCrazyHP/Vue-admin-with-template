import { cacheEnum } from "@/enum/cacheEnum";
import store from "./store";
import userApi, { LoginData } from "@/api/mock/userApi";
import router from "@/router";
import userStore from "@/store/userStore"

export  async function login(values:LoginData) {
    const token = (await userApi.login(values)).data.token

    store.set(cacheEnum.TOKEN_NAME,{ token },100000000)
    const routeName = store.get(cacheEnum.REDIRECT_ROUTE_NAME)??'home'
    console.log(routeName);
    
    router.push({ name: routeName })
}

export function isLogin(){
    return Boolean(store.get(cacheEnum.TOKEN_NAME))
}

export function logout() {
    store.remove(cacheEnum.TOKEN_NAME)
    router.push('/')
    userStore().info=null
}