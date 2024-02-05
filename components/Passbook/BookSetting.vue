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

</template>