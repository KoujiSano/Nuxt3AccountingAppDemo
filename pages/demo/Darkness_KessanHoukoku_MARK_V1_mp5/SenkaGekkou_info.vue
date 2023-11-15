<template>
    <div>
      {{ data }}
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      data() {
        return this.$store.getters.data
      },
    },
  }
  </script>