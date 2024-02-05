<template>
    <div>
    <b-table bordered>
      <b-thead>
        <b-tr text-alignment="center" text-wrap="nowrap">
          <b-th scope="col" col="sm-0">行</b-th>
          <b-th scope="col" colspan="3" col="sm-2">
            日付
          </b-th>
          <b-th scope="col" col="sm-4">
            摘要
          </b-th>
          <b-th scope="col" colspan="2" col="sm-4">
            科目
          </b-th>
          <b-th scope="col" col="sm-2">
            支払い金額
          </b-th>
          <b-th scope="col" col="sm-2">
            預かり金額
          </b-th>
          <b-th scope="col" col="sm-2">
            差引残高
          </b-th>
          <b-th scope="col" col="sm-4">
            付箋
          </b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <!-- データを描画するためのループ -->
        <b-tr v-for="(rowData, rowIndex) in extendedTableData" :key="rowIndex" text-alignment="center" text-wrap="nowrap">
  <!-- 各行の列 -->
  <b-td v-for="(value, colIndex) in rowData" :key="colIndex" :col="columnWidths[colIndex]">
    <!-- ボタンを表示 -->
    <b-button v-if="colIndex === 10 || colIndex === 6" style="background-color: transparent; border-color: #ced4da; color: #495057;">
  {{ value }}
</b-button>    <!-- ボタン以外の場合はテキストを表示 -->
    <template v-else>
      {{ value }}
    </template>
</b-td>
</b-tr>
</b-tbody>
</b-table>
</div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [
                    [1, '2024', 2, 1, '軽食', '福利厚生費', '科目', '3,105', '0', '43,291', '付箋'],
                ],
                columnWidths: ['sm-0', 'sm-2', 'sm-0', 'sm-0', 'sm-4', 'sm-3', 'sm-1', 'sm-2', 'sm-2', 'sm-4'],
                // 各列の幅（sm-0やsm-2など）を指定するデータ
            };
        },
        computed: {
            // 連番を含む20行のデータを作成
            extendedTableData() {
                const firstRow = this.tableData[0];
                return Array.from({
                    length: 20
                }, (_, index) => {
                    return index === 0 ? firstRow : [index + 1, ...firstRow.slice(1).map(() => '')];
                });
            },
        },
    };
</script>