import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/mock/upload/image',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message:"上传成功",
        errno:0,
        status:'success',
        data: {
            url:'/images/xj.jpg',
        },
      }
    },
  },
  
] as MockMethod[]