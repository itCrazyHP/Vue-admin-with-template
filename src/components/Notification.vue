<template>
    <div class="notification">
        <i class="fas fa-align-justify cursor-pointer" @click.stop="show=!show"></i>
        <el-tabs v-model="activeName" class="lists" v-show="show" @click.stop>
            <el-tab-pane label="系统通知" name="first" >
                <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, tempora maxime. Laboriosam voluptatum unde perferendis aut eos numquam explicabo reiciendis aperiam nulla nihil exercitationem incidunt, fugit eveniet aspernatur ad veritatis facere blanditiis vitae praesentium magnam minus. Laborum repudiandae praesentium reprehenderit animi. Similique, doloremque velit, optio aliquid dicta modi quia numquam autem saepe tempora dolorum magnam quaerat excepturi iure quas at fuga minima eos quibusdam blanditiis libero itaque magni illum. Autem voluptas alias eaque. Eveniet molestiae voluptates aliquid eaque atque quae ab officiis minus vero? Ducimus quisquam natus autem dolorem consequuntur reprehenderit perferendis, minus non eos ex voluptatibus inventore quam impedit adipisci est deleniti ipsam nisi sunt quo magni. Minus totam quo id excepturi quia a labore maxime architecto voluptatum est! Nostrum hic illo perferendis, eaque dignissimos repellat distinctio?</a>
                <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, tempora maxime. Laboriosam voluptatum unde perferendis aut eos numquam explicabo reiciendis aperiam nulla nihil exercitationem incidunt, fugit eveniet aspernatur ad veritatis facere blanditiis vitae praesentium magnam minus. Laborum repudiandae praesentium reprehenderit animi. Similique, doloremque velit, optio aliquid dicta modi quia numquam autem saepe tempora dolorum magnam quaerat excepturi iure quas at fuga minima eos quibusdam blanditiis libero itaque magni illum. Autem voluptas alias eaque. Eveniet molestiae voluptates aliquid eaque atque quae ab officiis minus vero? Ducimus quisquam natus autem dolorem consequuntur reprehenderit perferendis, minus non eos ex voluptatibus inventore quam impedit adipisci est deleniti ipsam nisi sunt quo magni. Minus totam quo id excepturi quia a labore maxime architecto voluptatum est! Nostrum hic illo perferendis, eaque dignissimos repellat distinctio?</a>
                <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, tempora maxime. Laboriosam voluptatum unde perferendis aut eos numquam explicabo reiciendis aperiam nulla nihil exercitationem incidunt, fugit eveniet aspernatur ad veritatis facere blanditiis vitae praesentium magnam minus. Laborum repudiandae praesentium reprehenderit animi. Similique, doloremque velit, optio aliquid dicta modi quia numquam autem saepe tempora dolorum magnam quaerat excepturi iure quas at fuga minima eos quibusdam blanditiis libero itaque magni illum. Autem voluptas alias eaque. Eveniet molestiae voluptates aliquid eaque atque quae ab officiis minus vero? Ducimus quisquam natus autem dolorem consequuntur reprehenderit perferendis, minus non eos ex voluptatibus inventore quam impedit adipisci est deleniti ipsam nisi sunt quo magni. Minus totam quo id excepturi quia a labore maxime architecto voluptatum est! Nostrum hic illo perferendis, eaque dignissimos repellat distinctio?</a>
            </el-tab-pane>
            <el-tab-pane label="站内消息" name="second">Config</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';

const show = ref(false)
const activeName = ref('site')
nextTick(()=>{
    document.documentElement.addEventListener('click',()=>{
        show.value = false
    })
})
</script>

<style lang="scss" scoped>
.notification {
    @apply relative;
    .lists {
        @apply absolute bg-white p-5 border rounded-md shadow-md right-[-60px] z-50 w-[300px];
        a{
            @apply block truncate border-b pb-2  mt-2 hover:text-violet-400;
        }
    }
}
</style>