<template>
  <div class="container">
    <h1>仕訳帳</h1>
    <table class="table">
      <tbody>
        <tr>
          <th>会計単位</th>
          <td>
            <select class="form-select" aria-label="選択してください。">
              <option value="1">本社</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>対象仕訳番号</th>
          <td>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </td>
        </tr>
        <tr>
          <th>対象日付範囲</th>
          <td>
            <select class="form-select" aria-label="選択してください。">
              <option value="1">2023</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>年度</th>
          <td></td>
        </tr>
        <tr>
          <th>計上種類</th>
          <td></td>
        </tr>
        <tr>
          <th>付箋</th>
        </tr>
        <tr>
          <th>入力種類区分</th>
          <td></td>
        </tr>
        <tr>
          <th>出力順</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
