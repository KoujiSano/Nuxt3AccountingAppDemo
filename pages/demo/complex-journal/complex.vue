<template>
    <h1>複合仕訳入力</h1>
<div class="container">
    <h2>仕訳帳</h2>
  <table class="table">
    <thead>
      <tr>
        <th>年度<DropdownMenu :options="menu1Options" /></th>
        <th>区分<DropdownMenu :options="menu2Options" /></th>
        <th>会計単位<DropdownMenu :options="menu3Options" /></th>
        <th>消費税<DropdownMenu :options="menu4Options" /></th>
        <th>対象期間<DropdownMenu :options="menu5Options" /></th>
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
import DropdownMenu from '~/components/DropdownMenu-kubo.vue';

const menu1Options = [
  { label: '2023', value: 'optionA' },
];

const menu2Options = [
  { label: '月次', value: 'optionX' },
  { label: '決算（中間）', value: 'optionY' },
  { label: '決算（期末）', value: 'optionZ' },
  { label: '決算再振替', value: 'optionα' },
  { label: '期中', value: 'optionω' },
];

const menu3Options = [
  { label: '本社', value: 'optionX' },
];

const menu4Options = [
  { label: '原則課税/税抜処理', value: 'optionA' },
];

const menu5Options = [
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
</script>