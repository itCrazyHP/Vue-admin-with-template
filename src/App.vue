<script setup lang="ts">


// import userApi from '@/api/userApi'
// const response = await userApi.info()
// console.log(response.result.age);
// const login = await userApi.login()
// console.log(login.result.token);

</script>

<template>
    <Suspense>
      <router-view></router-view>
    </Suspense>
</template>

<style scoped></style>
