<template>
        <b-div flex padding="t-3" justify-content="center">
        <table class="table" margin="e-2" col="sm-3 xs-4 md-2">
        <tbody>
            <tr>
                <th>年度</th>
                <td>
                <select class="form-select" aria-label="選択してください。">
                    <option value="1">2024</option>
                </select>
                </td>
            </tr>
            <tr>
                <th>区分</th>
                <td>
                <select class="form-select" aria-label="選択してください。">
                    <option value="1">月次</option>
                </select>
                </td>
            </tr>
            <tr>
                <th>会計単位</th>
                <td>
                <select class="form-select" aria-label="選択してください。">
                    <option value="1">本社</option>
                </select>
                </td>
            </tr>
          <tr>
            <th>消費税</th>
            <td>
              <p>簡易課税 / 税込処理</p>
            </td>
          </tr>
          <tr>
            <th>対象期間</th>
            <td>
                <p>2024/2/1 ~ 2024/2/29</p>
            </td>
        </tr>
    </tbody>
</table>
</b-div>
<b-div padding="t-3" class="d-flex justify-content-start align-items-center p-3">
    <div class="d-flex w-100">
        <b-button button="outline-primary" margin="e-2">
            ＜前月
        </b-button>
        <h2 margin="e-2">2月</h2>
        <b-button button="outline-primary" margin="e-2">
            翌月＞
        </b-button>
    </div>
    <b-table bordered class="w-50">
        <b-tbody>
            <b-tr>
                <b-td scope="col" col="xs-8 sm-4">当月残高</b-td>
                <b-td scope="col" col="xs-2 sm-1">41,125</b-td>
            </b-tr>
        </b-tbody>
    </b-table>
</b-div>
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
</b-tr>      </b-tbody>
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
      return Array.from({ length: 20 }, (_, index) => {
        return index === 0 ? firstRow : [index + 1, ...firstRow.slice(1).map(() => '')];
      });
    },
  },
};
</script>