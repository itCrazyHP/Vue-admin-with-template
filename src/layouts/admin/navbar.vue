<template>
    <div class=" bg-white p-4 flex justify-between items-center">
        <div class="flex justify-center items-center">
            <div @click="menuStore().toggleState">
                <icon-indent-left theme="filled" size="24" fill="#333" class="cursor-pointer" v-if="menuStore().isClose"/>
                <icon-indent-right theme="filled" size="24" fill="#333" class="cursor-pointer" v-else/>
                <!-- <i class="fas fa-caret-square-left cursor-pointer" v-if="menuStore().isClose" v-if="isFullScreen"></i>
                <i class="fas fa-caret-square-right cursor-pointer" v-else></i> -->
            </div>
            
            <BreadCrumb class="hidden md:block"/>
        </div>
            
        
        <div class="flex items-center">
            <Notification class="mr-5"/>
            <icon-off-screen-one theme="filled" size="24" fill="#333" @click="fullScreen" class=" mr-5 cursor-pointer" v-if="isFullScreen"/>
            <icon-full-screen-one theme="filled" size="24" fill="#333" @click="fullScreen" class=" mr-5 cursor-pointer" v-else/>
            
        <div class="flex justify-center items-center  relative group ">
            

            <img :src="user.info?.avatar" alt="" class="w-8 h-8 rounded-full object-cover">
            <span class="ml-1 text-sm text-gray-600">{{ user.info?.name }}</span>
            <section
                class=" group-hover:block absolute z-50 translate-y-[63%] bg-white shadow-sm px-3 whitespace-nowrap border rounded-md hidden hover:block">
                <div class="flex items-center cursor-pointer border-b py-3">
                    <icon-log theme="outline" size="16" fill="#333"/>
                    <span class="text-xs text-gray-600 ml-2">文档资料</span>
                </div>
                <div class="flex items-center cursor-pointer border-b py-3">
                    <icon-home theme="outline" size="16" fill="#333"/>
                    <span class="text-xs text-gray-600 ml-2">网站首页</span>
                </div>
                <div class="flex items-center cursor-pointer mb-2 py-2" @click="util.user.logout()">
                    <icon-logout theme="outline" size="16" fill="#333"/>
                    <span class="text-xs text-gray-600 ml-2">退出登陆</span>
                </div>
            </section>
        </div>
    </div>
    </div>
</template>

<script lang="ts" setup>
import userStore from '@/store/userStore.js'
import util from '@/utils'
import menuStore from '@/store/menuStore';
import { ref,watch,Ref } from 'vue';
import Notification from '@/components/Notification.vue';
import BreadCrumb from '@/components/BreadCrumb.vue';
import { useRoute } from 'vue-router';

const user = userStore()
let isFullScreen = ref<boolean>(false)
const fullScreen = () =>{
    isFullScreen.value ? document.exitFullscreen():document.documentElement.requestFullscreen()
    isFullScreen.value = !isFullScreen.value
    
}
</script>

<style lang="scss" scoped></style>