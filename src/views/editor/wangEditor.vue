<template>
    <div>
           <Editor v-model="content"/>
           {{ content }}
    </div>
</template>

<script setup lang="ts">
import Editor from '@/components/wangEditor/editor.vue';
const content = ref('abc@@@')
</script>

<style scoped>

</style>