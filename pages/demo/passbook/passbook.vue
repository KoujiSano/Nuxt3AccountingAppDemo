<template>
    <div>
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
                <p>2020/9/1 ~ 2020/9/30</p>
            </td>
            </tr>
        </tbody>
    </table>
</b-div>
<b-div padding="t-3" class="d-flex justify-content-start align-items-center p-3">
    <b-button button="outline-primary" margin="e-2">
        ＜前月
    </b-button>
    <h2 margin="e-2">9月</h2>
    <b-button button="outline-primary" margin="e-2">
        翌月＞
    </b-button>
</b-div>
<b-div>
    <b-table bordered>
        <b-thead>
            <b-tr text-alignment="center" text-wrap="nowrap">
                <b-th scope="col" col="xs-2 sm-2">
                    日付
                </b-th>
                <b-th scope="col" col="xs-3 sm-3">
                    摘要
                </b-th>
                <b-th scope="col" col="xs-3 sm-3">
                    科目
                </b-th>
                <b-th scope="col" col="xs-2 sm-2">
                    支払い金額
                </b-th>
            <b-th scope="col" col="xs-2 sm-2">
                預かり金額
            </b-th>
            <b-th scope="col" col="xs-2 sm-2">
                差引残高
            </b-th>
            <b-th scope="col" col="xs-1 sm-1">
                付箋
            </b-th>
        </b-tr>
    </b-thead>
</b-table>
<b-table bordered>
<b-tbody>
    <b-tr text-wrap="nowrap">
            <b-td class="text-right">
                10
            </b-td>
        <b-td scope="col" col="xs-2 sm-2">Cell 1</b-td>
    </b-tr>
</b-tbody>

</b-table>
</b-div>
</Container>
</div>
  </template>