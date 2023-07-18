<template>
    <div class="animate-list">
        <TransitionGroup 
        appear
        :tag="props.tag" 
        name="article"
        @before-enter="beforeEnter"
        @enter="enter"
        >

        <slot/>

        </TransitionGroup>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { RendererElement } from 'vue'
interface props{
    tag?:string,
    duration?:number,
    delay?:number
}
const props = withDefaults(defineProps<props>(),{
    tag:undefined,
    duration:.5,
    delay:.2
})
console.log(props.duration);

const beforeEnter = (el:RendererElement)=>{
    gsap.set(el,{
        opacity:0
    }) 
}

const enter = (el:RendererElement)=>{
    gsap.to(el,{
        opacity:1,
        duration:props.duration,
        delay:el.dataset.index * props.delay!//el.dataset DOMStringMap ——> {v-98cf6bff: '', index: '0'}
    })

    
}
</script>

<style lang="scss" scoped>

// .animate-list{
//     position: relative;
//     .article-leave-active{
//     transition: all 1s ease;
//     position: absolute;
//     width: 100%;
// }
// .article-leave-to{
//     opacity: 0;
// }
// .article-move{
//     transition: all 1s ease;
// }
// }

</style>