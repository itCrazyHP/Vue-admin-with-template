<template>
        <input type="text" placeholder="请输入手机号或邮箱" :value="modelValue" @input="$emit('update:modelValue',($event.target as HTMLInputElement).value)">
</template>

<script setup lang="ts">

interface props{
        modelValue:string
}
const props = withDefaults(defineProps<props>(),{
        modelValue:''
})
</script>

<style lang="scss" scoped>
input{
@apply  border w-full rounded-md py-2 px-4  focus:ring-2 ring-offset-2 ring-indigo-500 outline-none duration-300
}
</style>