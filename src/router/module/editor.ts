import { RouteRecordRaw } from "vue-router"
export default {
    name:'editor',
    path:'/editor',
    component:()=>import('@/layouts/admin.vue'),
    meta:{
        auth:true,
        menu:{
            title:'编辑器',icon:'EditOne',
        }
    },
    children:[
        {
            name:'markdown',
            path:'markdown',
            component:()=>import('@/views/editor/markdown.vue'),
            meta:{
                permission:'editor_markdown',
                menu:{
                    title:'markdown'
                }
            },
        },
        {
            name:'wangEditor',
            path:'wangEditor',
            component:()=>import('@/views/editor/wangEditor.vue'),
            meta:{
                menu:{
                    title:'wangEditor'
                },
            },
        }
    ]
} as RouteRecordRaw