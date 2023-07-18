<template>
    <div>
        <MarkdownEditor v-model="content" :height="300" placeholder="请输入markdown内容"/>
    </div>
</template>

<script setup lang="ts">
    import Editor from '@/components/markdown/editor.vue';
import { ref } from 'vue';
    const content = ref('黄鹏123465789')
</script>

<style scoped>

</style>