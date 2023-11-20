<template>
    <h1>複合仕訳入力</h1>
<div class="container">
    <h2>仕訳帳</h2>
  <table class="table">
    <thead>
      <tr>
        <th>年度<ReusableSelect :options="select1Options" :size="select1Size" /></th>
        <th>区分<ReusableSelect :options="select2Options" :size="select2Size" /></th>
        <th>会計単位<ReusableSelect :options="select3Options" :size="select3Size" /></th>
        <th>消費税<ReusableSelect :options="select4Options" :size="select4Size" /></th>
        <th>対象期間<ReusableSelect :options="select5Options" :size="select5Size" /></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>科目</td>
        <td>補助</td>
        <td>名称</td>
        <td>金額</td>
        <td>消費税区分</td>
        <td>消費税</td>
        <td>部門</td>
        <td>摘要</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script setup>
import ReusableSelect from '~/components/ReusableSelect.vue';

const select1Options = [
  { label: '2023', value: 'optionA' },
  { label: '2024', value: 'optionB' },
];
const select1Size = '70px';

const select2Options = [
  { label: '月次', value: 'optionA' },
  { label: '決算（中間）', value: 'optionB' },
  { label: '決算（期末）', value: 'optionC' },
  { label: '決算再振替', value: 'optionD' },
  { label: '期中', value: 'optionE' },
];
const select2Size = '115px';

const select3Options = [
  { label: '本社', value: 'optionA' },
];
const select3Size = '60px';

const select4Options = [
  { label: '原則課税/税抜処理', value: 'optionA' },
];
const select4Size = '170px';

const select5Options = [
  { label: '2023/1/1 ~ 2023/1/30', value: 'optionA' },
  { label: '2023/2/1 ~ 2023/2/28', value: 'optionB' },
  { label: '2023/3/1 ~ 2023/3/31', value: 'optionC' },
  { label: '2023/4/1 ~ 2023/4/30', value: 'optionD' },
  { label: '2023/5/1 ~ 2023/5/31', value: 'optionE' },
  { label: '2023/6/1 ~ 2023/6/30', value: 'optionF' },
  { label: '2023/7/1 ~ 2023/7/31', value: 'optionG' },
  { label: '2023/8/1 ~ 2023/8/31', value: 'optionH' },
  { label: '2023/9/1 ~ 2023/9/30', value: 'optionI' },
  { label: '2023/10/1 ~ 2023/10/31', value: 'optionJ' },
  { label: '2023/11/1 ~ 2023/11/30', value: 'optionK' },
  { label: '2023/12/1 ~ 2023/12/31', value: 'optionL' },
];
const select5Size = '200px';

</script>