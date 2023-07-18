import {RouteLocationNormalized, Router} from 'vue-router'
import util from '@/utils'
import userStore from '@/store/userStore'
import { cacheEnum } from '@/enum/cacheEnum'
import menuStore from '@/store/menuStore'
import store from '@/utils/store'
class Guard{
    constructor(private router:Router){
        
    }
    public run(){ 
        this.router.beforeEach(this.beforeEach.bind(this))//this绑定为Guard，否则undefined
    }

    private beforeEach(to:RouteLocationNormalized,from:RouteLocationNormalized){
        if(to.meta.auth && !this.token()) {
            store.set(cacheEnum.REDIRECT_ROUTE_NAME,to.name)
            return {name:'login'}
        }
        if(to.meta.guest && this.token()) return from        
    }

    private getUserInfo(){
        if(this.token()){
            userStore().getUserInfo()
        }
    }

    private token():string | null{
        return util.store.get(cacheEnum.TOKEN_NAME)?.token
    }

}
export default(router:Router)=>{
    new Guard(router).run()
}