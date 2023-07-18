interface ResponseResult <T>{
    code: number,
    message:string,
    status:'success'|'error',
    data: T
}

interface ResponsePageResult <T>{
    data: T,
    meta:{
        current_page:number
        page_row:number
        total:number
        total_page:number
    }
}