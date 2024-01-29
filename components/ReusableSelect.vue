<template>
  <div class="reusable-select" :style="{ width: size }">
    <select v-model="selectedOption" @change="handleChange">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps(['options', 'size']);

const selectedOption = ref(null);

const handleChange = () => {
  // 選択が変更されたときの処理をここに追加
  console.log('Selected option:', selectedOption.value);
};
</script>

<style scoped>
.reusable-select {
  position: relative;
}

select {
  width: 100%;
  padding: 7px;
  font-size: 16px;
}
</style>