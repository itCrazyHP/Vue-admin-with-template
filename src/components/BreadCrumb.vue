<template>
    <div>
        <el-breadcrumb separator="/" class="ml-2">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <template v-if="menuStore().route">
                    <el-breadcrumb-item v-for="(route,index) of menuStore().route?.matched">{{ route.meta.menu?.title }}</el-breadcrumb-item>
                </template>       
        </el-breadcrumb>
    </div>
</template>

<script setup lang="ts">
import menuStore from '@/store/menuStore';

</script>

<style scoped>

</style>