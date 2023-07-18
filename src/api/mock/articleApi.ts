import { mock } from "@/plugins/axios";
export interface Article{
    id:number,
    title:string,
    content:string
}
function articleApi() {
    return mock.request<Article[]>({//调用request方法 <ResponseResult<User>> ResponseResult对应ResponseResult.d.ts User对应上边
        url: 'article',
        method:'get',
    })
}
export default articleApi