<template>
    <div class="main grid md:grid-cols-[auto_1fr] h-screen w-screen">
        <Menu class="" />
        <div class="content bg-gray-100 grid grid-rows-[auto_1fr]">
            <div class>
                <Navbar />
                <historyLink />
            </div>

            <div class="m-5 relative overflow-hidden">
                <router-view #default="{ Component }">
                    <transition appear class="animate__animated " enter-active-class="animate__fadeInRight"
                        leave-active-class="animate__fadeOutLeft">
                        <component :is="Component" class="absolute w-full"></component>
                    </transition>
                </router-view>
            </div>

        </div>


    </div>
</template>

<script lang="ts" setup>
import Menu from './admin/menu.vue';
import Navbar from './admin/navbar.vue'
import historyLink from './admin/historyLink.vue'
import menuStore from '@/store/menuStore';
import { useRoute } from 'vue-router';
import {watch} from 'vue'
const route = useRoute() //用来获取当前路由，用来当你刷新后处在需要添加进历史路由的页面（如404 403）可以直接添加进去，如果直接在首页admin-home可以通过menuStore中的方法排除排除他
const menu = menuStore()

menu.init()//初始化，读取localstorge的历史路由

watch(route,()=>{
menuStore().addHistoryMenu(route)
},{immediate:true})
</script>

