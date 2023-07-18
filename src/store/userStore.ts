import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { RouteRecordNormalized } from 'vue-router'
import userApi, {User} from '@/api/mock/userApi'

export default defineStore('user',{
    state:()=>{
        return {
          info:{} as null | User
        }
    },
    persist:true,
    actions:{
        async getUserInfo(){//在路由守卫中调用
            const res = await userApi.info()             
            this.info = res.data
        },
    },
    
})

