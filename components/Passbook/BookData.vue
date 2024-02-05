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
  <b-tr v-for="(rowData, index) in Array.from({ length: 20 }, (_, i) => i + 1)" :key="index" text-alignment="center" text-wrap="nowrap">
    <!-- 各列のセル -->
    <b-td scope="col">{{ index + 1 }}</b-td>
    <b-td scope="col" col="sm-2">{{ tableData[index]?.column1 || '' }}</b-td>
    <b-td scope="col" col="sm-0">{{ tableData[index]?.column2 || '' }}</b-td>
    <b-td scope="col" col="sm-0">{{ tableData[index]?.column3 || '' }}</b-td>
    <b-td scope="col">{{ tableData[index]?.column4 || '' }}</b-td>
    <b-td scope="col" col="sm-3">{{ tableData[index]?.column5 || '' }}</b-td>
    <b-td scope="col" col="sm-1">
      <b-button>{{ '科目' }}</b-button>
    </b-td>
    <b-td scope="col">{{ tableData[index]?.column7 || '' }}</b-td>
    <b-td scope="col">{{ tableData[index]?.column8 || '' }}</b-td>
    <b-td scope="col">{{ tableData[index]?.column9 || '' }}</b-td>
    <b-td scope="col">
      <b-button>{{ '付箋' }}</b-button>
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
        {
          column1: '2024',
          column2: '2',
          column3: '1',
          column4: '軽食',
          column5: '福利厚生',
          column7: '3,105',
          column8: '0',
          column9: '43,291',
        },
        // Add more rows as needed
      ],
    };
  },
};
</script>