<template>
  <div>
    <select v-model="selectedOption" @change="handleChange">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps(['options']); // 親コンポーネントからオプションを受け取る

const selectedOption = ref(null);

const handleChange = () => {
  // プルダウンメニューの選択が変更されたときの処理をここに追加
  console.log('Selected option:', selectedOption.value);
};
</script>