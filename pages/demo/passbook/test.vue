<template>
    <div class="container">
      <h1>通帳入力</h1>
      <table class="table">
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
        <div class="d-flex justify-content-start align-items-center p-3">
            <b-button variant="outline-primary" class="mr-3" size="sm">
            ＜前月
            </b-button>
            <h2>9月</h2>
            <b-button variant="outline-primary" size="sm">
            翌月＞
            </b-button>
        </div>
    </div>
</template>

