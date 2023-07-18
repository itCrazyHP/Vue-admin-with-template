<template>
    <div class="admin-menu" :class="{ close: menuStore().isClose }">

        <div class="menu w-[200px] bg-gray-800" >
            <div class="logo text-gray-300 flex items-center p-4">
                <icon-broadcast-radio theme="filled" size="25" fill="#bd10e0" class="mr-2"/>
                <span class="text-md">主栏目</span>
            </div>
            <!-- 菜单 -->
            <div class="left-container">

                <!-- <dl>
                    <dt @click="$router.push('/admin')" class="  p-3 mt-6"
                        :class="{ 'bg-violet-600 text-white': $route.name === 'admin-home' }">
                        <section>
                            <i class="fas fa-home"></i>
                            <span class="text-md ml-2">主页</span>
                        </section>
                    </dt>
                </dl> -->


                <dl @click="menu.isClick = !menu.isClick" v-for="(menu, index) of menus.menus" :key="index">
                    <dt>
                        <section>
                            <component :is="icons[menu.icon!]" size="18" fill="#dcdcdc" class="mr-2"/>
                            <span class="text-sm">{{ menu.title }}</span>
                        </section>
                        <section>
                            <icon-down theme="filled" size="20" fill="#dcdcdc" class="duration-300" :class="{ 'rotate-180': menu.isClick }"/>
                        </section>

                    </dt>
                    <dd v-show="menu.isClick && menuStore().isClose!==undefined">
                        <div :class="{ active: cmenu.isClick }" v-for="(cmenu, index) of menu.children" :key="index"
                            @click.stop="router.push({ name: cmenu.route })">
                            {{ cmenu?.title }}</div>
                    </dd>

                </dl>
            </div>
        </div>
        
        <div class="bg" @click="menuStore().toggleState"></div>
    </div>
</template>

<script setup lang="ts">
import { ref,watch } from 'vue';
import menuStore from '@/store/menuStore.js';
import { useRoute } from 'vue-router';
import { IMenu } from '#/menu';
import { useRouter } from 'vue-router';
import * as icons from '@icon-park/vue-next'

const menus = menuStore()
const route = useRoute()
const router = useRouter()
let is = ref(menuStore().isClose) 
watch(route, () => {
    menuStore().setCurrentMenu(route)
}, { immediate: true })

menuStore().$subscribe((mutation, state) => {
    //@ts-ignore
    if(!mutation.events.newValue && mutation.events.key === 'isClose'){//订阅isClose，当isClose变化就保存当前menu的isClick值，作用是用来当收缩变为展开时精确显示应处状态
        menuStore().setCurrentMenu(route)
    }
    
})



</script>

<style lang="scss" scoped>
.admin-menu {
    .menu{
        @apply h-full;
    }
    .left-container {
        dl {
            @apply text-gray-300 text-sm relative;

            dt {
                @apply text-sm p-4 flex justify-between cursor-pointer items-center;

                section {
                    @apply flex items-center;
                }
            }

            dd {
                div {
                    @apply py-3 pl-4 m-3 text-white rounded-md cursor-pointer bg-gray-700 hover:bg-violet-500 duration-300;

                    &.active {
                        @apply bg-violet-700 hover:bg-violet-500;
                    }
                }

            }
        }
    }
&.close {
    .menu {
            width: auto;
            @apply duration-300;

            .logo {
                @apply flex justify-center;


                span {
                    @apply hidden;
                    &.i-icon{
                        @apply block mr-0;
                    }
                }
            }

            .left-container {
                dl {
                    dt {
                        @apply flex justify-center;

                        section {
                            

                            span {
                                @apply hidden;
                                &.i-icon{
                        @apply block mr-0;
                    }
                            }

                            &:nth-of-type(2) {
                                @apply hidden;
                            }
                        }
                    }

                    &:hover {
                        dd {
                            display: block !important;
                            @apply block absolute left-full w-[200px] bg-gray-700 z-50 top-0;
                        }
                    }
                    dd {
                            display: none;
                        }



                }
            }
        }
    }

}

@media screen and (max-width:768px) {
    .admin-menu {
        @apply h-screen w-[200px] absolute left-0 top-0 z-50;

        .menu {
            @apply h-full z-50;

            .close {}
        }

        .bg {
            @apply bg-gray-800 opacity-75 w-screen h-screen absolute left-0 top-0 -z-40;
        }
        &.close{
            @apply hidden;
        }
    }
}
</style>