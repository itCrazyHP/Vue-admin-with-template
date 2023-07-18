import { mock } from "@/plugins/axios";
export interface User{
    url:string,
}
function uploadImage(data:FormData) {
    return mock.request<User>({//调用request方法 <ResponseResult<User>> ResponseResult对应ResponseResult.d.ts User对应上边
        url: 'upload/image',
        method:'post',
        data
    })
}
export default uploadImage