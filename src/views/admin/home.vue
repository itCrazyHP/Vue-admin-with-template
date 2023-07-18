<template>
    <div class="grid md:grid-cols-4 gap-3 bg-gray-100">
        <el-card shadow="hover" :body-style="{ padding: '20px' }" v-for="(card, index) of cards" :key="index">
            <template #header>
                <div class="flex justify-between items-center">
                    {{ card.title }}
                    <el-tag type="danger" size="small" effect="dark">月</el-tag>
                </div>
            </template>

            <section class="flex justify-between items-center mt-3">
                <span class="text-2xl">{{ card.price }}</span>
                <i :class="[card.icon, card.iconColor]" class="  text-4xl"></i>
            </section>
            <section class="text-base mt-6 flex justify-between">
                {{ card.totalTitle }}
                <span class="">{{ card.total }}</span>
            </section>
        </el-card>
    </div>
    <div class="bg-gray-100  mt-5 grid md:grid-cols-2 gap-3">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
            <template #header>
                <div>
                    用户统计
                </div>
            </template>
            <div id="echart1"  class="w-full h-72"></div>
        </el-card>
        <el-card shadow="always" :body-style="{ padding: '20px' }">
            <template #header>
                <div>
                    销售额
                </div>
            </template>
            <div id="echart2"  class="w-full h-72"></div>
        </el-card>



    </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { echart1, echart2 } from './echart'
import * as echarts from 'echarts';
interface ICard {
    title: string,
    price: number,
    icon: string,
    iconColor: string,
    totalTitle: string,
    total: number
}
const cards = ref<ICard[]>([
    { title: '总人数', price: 23343, iconColor: "text-violet-500", icon: 'fas fa-address-card', total: 389298, totalTitle: '总人数' },
    { title: '销售额', price: 18393, iconColor: "text-green-500", icon: 'fas fa-apple-alt', total: 1596489, totalTitle: '总销售额' },
    { title: '订单数', price: 3808, iconColor: "text-blue-500", icon: 'fas fa-award', total: 83493, totalTitle: '总订单数' },
    { title: '评论数', price: 2353, iconColor: "text-yellow-500", icon: 'fas fa-baseball-ball', total: 49820, totalTitle: '总评论' },
])



nextTick(() => {
    
    echarts.init(document.getElementById('echart1') as HTMLDivElement).setOption(echart1);
    //@ts-ignore
    echarts.init(document.getElementById('echart2') as HTMLDivElement).setOption(echart2);

})

</script>

<style scoped></style>

<script lang="ts">
export default{
    route:{meta:{auth:true}}
}
</script>