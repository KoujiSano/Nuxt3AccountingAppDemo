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
<b-div class="d-flex flex-row">
    <b-div margin="e-2">行</b-div>
    <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">日付</th>
      <th scope="col" colspan="2">摘要</th>
      <th scope="col" colspan="2">科目</th>
      <th scope="col">支払い金額</th>
      <th scope="col">預かり金額</th>
      <th scope="col">差引残高</th>
      <th scope="col">付箋</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="col" colspan="7"><div class="text-left">当月残高</div></th>
      <th colspan="2">41,125</th>
    </tr>
  </tbody>
</table>
</b-div>
<b-div class="overflow-y-scroll">
    <table class="table table-bordered">

    </table>
</b-div>
    </Container>
</template>