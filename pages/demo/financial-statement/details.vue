<script setup>
const { data:response } = await useFetch('http://localhost:3939/Accounting/AccountItem',)

</script>
<template>
    <h1>Financial Statement Details</h1>
    <h2>{{ response }}</h2>
</template>