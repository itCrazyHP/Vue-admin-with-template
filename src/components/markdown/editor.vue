<template>
    <div id="editor"></div>
</template>

<script lang="ts" setup>
import { nextTick } from "process";
import ToastEditor from "./toastEditor"
interface IProps {
    modelValue?: string
    height?: number
    placeholder?: string
}
const props = withDefaults(defineProps<IProps>(),{
    modelValue:'',
    height:500,
    placeholder:''
}
)

const emit = defineEmits(['update:modelValue'])

nextTick(() => {
   const toastUi = new ToastEditor('#editor', `${props.modelValue}`, `${props.height}px`)
   toastUi.editor.on('change',(type:string)=>{
    const content = type === 'markdown'?toastUi.editor.getMarkdown():''
    emit('update:modelValue',content)
   })
})
</script>

<style lang="scss">
#editor{
    .toastui-editor-mode-switch{
        display: none !important;
    }
    .fullscreen{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        background-color: #fff;
    }
}

</style>