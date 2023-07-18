import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/mock/article',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message:"请求成功",
        status:'success',
        data: new Array(20).fill('').map((article,index)=>{
            return{
                id:index,
                title:Random.ctitle(),
                content:Random.cparagraph()
            }
        })
      }
    },
  }
  
] as MockMethod[]