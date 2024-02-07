<script setup lang="ts">

const { data:response } = await useFetch('/api/user/useOrleans?url=AccountItem',)

</script>
<template>
    <h1>Financial Statement Details</h1>
    <h2>{{ response[0] }}</h2>
</template>