<template>
    <div class=" bg-slate-300 h-screen flex justify-center items-center p-5 md:p-0 ">
        <div class=" bg-white w-[720px] -translate-y-10 md:grid grid-cols-2 rounded-md shadow-md overflow-hidden h-96">
            <form @submit="onSubmit" class=" p-6">
                <h2 class=" text-center text-lg mt-4 mb-5">会员登陆</h2>
                <div class=" h-[70px]">
                    <FormHpInput v-model="values.username" />
                    <span class=" text-xs text-red-500 ">{{ errors.username }}</span>
                </div>
                <div class=" h-[70px]">
                    <FormHpInput placeholder="请输入密码" v-model="values.password"/>
                    
                    <span class=" text-xs text-red-500 ">{{ errors.password }}</span>
                </div>

                <FormHpButton />
                
                <div class=" flex justify-center gap-2">
                    <FormHpLink/><FormHpLink /><FormHpLink />
                </div>
            </form>
            <div class="hidden md:block">
                <img src="/images/work.jpg" alt="" class=" h-96 w-full object-cover">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import v from '@/plugins/validate'
import util from '@/utils/index'
import hpInput from '@/components/form/hp-input.vue'
const {yup,useFields} = v
const num = yup.number().cast('1')
console.log(typeof num);


const schema = {
    username: yup.string().required().email().label('账号'),
    password: yup.string().required().min(3).label('密码'),
}


const { handleSubmit, errors ,values} = v.useForm({
    initialValues: {
        username: '',
        password: '',
    },
    validationSchema: schema
})

useFields(Object.keys(schema))


const onSubmit = handleSubmit((values:any) => {
    util.user.login(values)
})


</script>

<style lang="scss" scoped>
input {
    @apply mt-3
}

button {
    @apply mt-5
}

a {
    @apply mt-4
}
</style>

<script lang="ts">
export default{
    route:{name:'login',meta:{guest:true}}
}
</script>