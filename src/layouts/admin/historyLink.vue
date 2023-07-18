<template>
    <div  class="hidden md:block">
        <div class="m-5 grid grid-flow-col gap-2 justify-start">
        
        <div v-for="link of historyLinks" 
        class="bg-white rounded-md py-2 px-3 text-sm text-gray-600 hover:bg-violet-500 hover:text-white duration-300 flex items-center"
        :class="{'!bg-violet-600 !text-white':$route.name === link.route}"
        >
            <router-link  :to="{name:link.route}">{{ link.title }}</router-link>
            <icon-close-one theme="outline" size="16" class="ml-3 cursor-pointer" :class="{'text-white':$route.name === link.route}" @click="onDelete(link)"/>
        </div>
    </div>
    </div>
    
</template>

<script setup lang="ts">
import { IMenu } from "#/menu";
import menuStore from "@/store/menuStore";
import { RouteLocationNormalized } from "vue-router";
const historyLinks = menuStore().historyMenu

const onDelete = (link:IMenu) =>{
    menuStore().removeHistoryMenu(link)
}

</script>

<style lang="scss" scoped>

</style>