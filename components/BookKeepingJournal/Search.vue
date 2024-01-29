<template>
  <div id="search">
    <h2>検索結果</h2>
    <b-table bordered>
      <b-thead theme="secondary">
        <b-tr>
          <b-th class="text-center" scope="col" colspan="2">仕訳番号</b-th>
          <b-th class="text-center" scope="col">仕訳日付</b-th>
          <b-th class="text-center" scope="col" colspan="2">会計単位</b-th>
          <b-th class="text-center" scope="col">計上種類区分</b-th>
          <b-th class="text-center" scope="col">入力日付</b-th>
          <b-th class="text-center" scope="col">入力者</b-th>
          <b-th class="text-center" scope="col">付箋</b-th>
        </b-tr>
        <b-tr>
          <b-th class="text-center vertical-middle" scope="row" rowspan="3">行番号</b-th>
          <b-th class="text-center" scope="col" colspan="4">借方</b-th>
          <b-th class="text-center" scope="col" colspan="4">貸方</b-th>
        </b-tr>
        <b-tr>
          <b-th class="text-center" scope="col">勘定科目</b-th>
          <b-th class="text-center" scope="col">補助科目</b-th>
          <b-th class="text-center" scope="col" colspan="2">金額</b-th>
          <b-th class="text-center" scope="col">勘定科目</b-th>
          <b-th class="text-center" scope="col">補助科目</b-th>
          <b-th class="text-center" scope="col" colspan="2">金額</b-th>
        </b-tr>
        <b-tr>
          <b-th class="text-center" scope="col">部門</b-th>
          <b-th class="text-center" scope="col">行適用</b-th>
          <b-th class="text-center" scope="col">税区分</b-th>
          <b-th class="text-center" scope="col">消費税額</b-th>
          <b-th class="text-center" scope="col">部門</b-th>
          <b-th class="text-center" scope="col">行適用</b-th>
          <b-th class="text-center" scope="col">税区分</b-th>
          <b-th class="text-center" scope="col">消費税額</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr>
          <b-td class="text-center" colspan="2"><a href="#">0000001</a></b-td>
          <b-td class="text-center">2020/01/01</b-td>
          <b-td class="text-center" colspan="2">本社</b-td>
          <b-td class="text-center">月次仕訳</b-td>
          <b-td class="text-center">2020/01/01</b-td>
          <b-td class="text-center">山田太郎</b-td>
          <b-td class="text-center">付箋</b-td>
        </b-tr>
        <b-tr>
          <b-td class="text-center vertical-middle" rowspan="2">1</b-td>
          <b-td>現金</b-td>
          <b-td></b-td>
          <b-td class="text-right" colspan="2">100,000</b-td>
          <b-td>売掛金</b-td>
          <b-td></b-td>
          <b-td class="text-right" colspan="2">100,000</b-td>
        </b-tr>
        <b-tr>
          <b-td></b-td>
          <b-td class="word-break"></b-td>
          <b-td class="text-center"></b-td>
          <b-td class="text-right">0</b-td>
          <b-td></b-td>
          <b-td class="word-break"></b-td>
          <b-td class="text-center">対象外</b-td>
          <b-td class="text-right">0</b-td>
        </b-tr>
        <b-tr>
          <b-td class="text-right" colspan="4">借方合計</b-td>
          <b-td class="text-right">100,000</b-td>
          <b-td class="text-right" colspan="3">貸方合計</b-td>
          <b-td class="text-right">100,000</b-td>
        </b-tr>
      </b-tbody>
    </b-table>
  </div>
</template>
