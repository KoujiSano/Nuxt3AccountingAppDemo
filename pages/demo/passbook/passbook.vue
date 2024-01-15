<template>
    <Container>
        <b-div flex padding="t-3" justify-content="center">
        <table class="table" margin="e-2" col="sm-3 xs-4 md-2">
        <tbody>
            <tr>
                <th>年度</th>
                <td>
                <select class="form-select" aria-label="選択してください。">
                    <option value="1">2020</option>
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
    <b-button button="outline-primary" margin="e-2">
        ＜前月
    </b-button>
    <h2 margin="e-2">2月</h2>
    <b-button button="outline-primary" margin="e-2">
        翌月＞
    </b-button>
</b-div>
<b-table>
    <b-tbody>
        <b-td scope="col" colspan="6" col="xs-8 sm-4" text-alignment="right">当月残高</b-td>
        <b-td scope="col" colspan="2" col="xs-2 sm-1">41,125</b-td>
    </b-tbody>
</b-table>
    <b-table bordered>
  <b-thead>
    <b-tr text-alignment="center" text-wrap="nowrap">
            <b-th scope="col" col="sm-0">行</b-th>
            <b-th scope="col" colspan="3" col="sm-3">
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
            <b-th scope="col" col="sm-1">
                付箋
            </b-th>
            
        </b-tr>
    </b-thead>
    <b-tbody>
        <b-tr>
            <b-td scope="col">1</b-td>
            <b-td scope="col" col="sm-2">2024</b-td>
            <b-td scope="col" col="sm-0">2</b-td>
            <b-td scope="col" col="sm-0">1</b-td>
            <b-td scope="col">軽食</b-td>
            <b-td scope="col" col="sm-3">福利厚生費</b-td>
            <b-td scope="col" col="sm-1">
                <b-button>
                    科目
                </b-button>
            </b-td>
            <b-td scope="col">3,105</b-td>
            <b-td scope="col">0</b-td>
            <b-td scope="col">43,291</b-td>
            <b-td scope="col">
                <b-button>
                    付箋
                </b-button>
            </b-td>
        </b-tr>
    </b-tbody>
</b-table>
<b-div class="overflow-y-scroll">
    <table class="table table-bordered">

    </table>
</b-div>
    </Container>
</template>