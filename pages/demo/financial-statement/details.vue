<script setup lang="ts">
const url = "http://localhost:5066/Accounting/AccountItem";

const headers = new Headers({
  Authorization: `Darkness`,
});
const res = await fetch(url, {
  method: "GET",
  headers: headers,
});
const resData = await res.json();
</script>
<template>
    <h1>Financial Statement Details</h1>
    <h2>{{ resData[1] }}</h2>
</template>