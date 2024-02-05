<script setup lang="ts">
const { data:resData } = await useFetch('/api/user/useOrleans?url=AccountItem',)

</script>
<template>
    <h1>Financial Statement Details</h1>
    <h2>{{ resData[1] }}</h2>
</template>