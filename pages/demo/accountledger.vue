<template>
  <div class="container">
    <table class="table table-bordered">
      <thead>
        <tr class="table-primary text-center">
          <th scope="col">日付</th>
          <th scope="col">仕訳番号</th>
          <th scope="col">補助科目</th>
          <th scope="col">相手科目</th>
          <th scope="col">摘要</th>
          <th scope="col">借方</th>
          <th scope="col">貸方</th>
          <th scope="col">残高</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" colspan="7">繰越金額</th>
          <td class="text-end">0</td>
        </tr>
        <tr>
          <td>2023/04/01</td>
          <th>000001</th>
          <td></td>
          <td>資本金</td>
          <td></td>
          <td class="text-end">1,000,000</td>
          <td></td>
          <td class="text-end">1,000,000</td>
        </tr>
        <tr>
          <td>2023/04/15</td>
          <th>000002</th>
          <td></td>
          <td>商品</td>
          <td></td>
          <td></td>
          <td class="text-end">1,000</td>
          <td class="text-end">999,000</td>
        </tr>
        <tr>
          <td>2023/04/20</td>
          <th>000003</th>
          <td></td>
          <td>諸口</td>
          <td></td>
          <td class="text-end">1,500</td>
          <td></td>
          <td class="text-end">1,000,500</td>
        </tr>
        <tr class="table-info">
          <th scope="row" colspan="5">4月度合計</th>
          <td class="text-end">1,001,500</td>
          <td class="text-end">1,000</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
