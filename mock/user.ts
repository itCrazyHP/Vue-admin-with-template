import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/mock/user/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message:"请求成功",
        status:'success',
        data: {
            name:'hphphp',
            age:18,
            avatar:'/images/xj.jpg',
            permissions:['editor_markdown','article_editor']
        },
      }
    },
  },
  {
    url: '/mock/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message:"登陆成功",
        status:'success',
        data: {
            token:Random.string(15)
        },
      }
    },
  },
  
] as MockMethod[]