<template>
    <div class="article p-5 bg-slate-600 min-h-screen">
        <AnimateList tag="ul">
            <li v-for="(article,index) of articles" :key="article.id" class=" cursor-pointer" @click="del(index)" :data-index="index">
            {{article.title }}
        </li>
        </AnimateList>

    </div>
</template>

<script setup lang="ts">
import articleApi from '@/api/mock/articleApi'


const articles = ref()

articleApi().then(({data})=>articles.value = data)


const del = (index: number) => {
    articles.value.splice(index, 1)
}


</script>

<style lang="scss" scoped>
    li {
        padding: 20px;
        margin-bottom: 20px;
        background-color: #8e44ad;
        color: white;
    }
</style>