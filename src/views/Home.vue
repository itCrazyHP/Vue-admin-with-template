<template>
    <div class=" h-screen w-screen bg-gray-700 flex justify-center items-center">
            <router-link :to="{name:'admin-home'}" class=" bg-cyan-600 rounded-md text-white py-2 px-4 hover:bg-cyan-500 duration-300">后台管理</router-link>
            <router-link v-if="!isLogin()" :to="{name:'login'}" class=" bg-cyan-600 rounded-md ml-3 text-white py-2 px-4 hover:bg-cyan-500 duration-300">用户登录</router-link>
        </div>
</template>

<script setup lang="ts">
import {isLogin} from '@/utils/user'
</script>

<style lang="scss" scoped>


</style>