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
              <form class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInputValue"
                  placeholder="仕訳番号"
                  value="0000000"
                />
                <label for="floatingInputValue">仕訳番号</label>
              </form>
            </div>
            <p>から</p>
            <div>
              <form class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInputValue"
                  placeholder="仕訳番号"
                  value="9999999"
                />
                <label for="floatingInputValue">仕訳番号</label>
              </form>
            </div>
          </td>
        </tr>
        <tr>
          <th>対象日付範囲</th>
          <td>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault1">
                仕訳日付
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                入力日付
              </label>
            </div>
          </td>
        </tr>
        <tr>
          <th>年度</th>
          <td>
            <div class="mb-3">
              <select class="form-select" aria-label="選択してください。">
                <option value="1">2023</option>
              </select>
            </div>
            <div class="mb-3">
              <select
                class="form-select"
                aria-label="選択してください。"
                multiple
              >
                <option value="1">1月</option>
                <option value="2">2月</option>
                <option value="3">3月</option>
                <option value="4">4月</option>
                <option value="5">5月</option>
                <option value="6">6月</option>
                <option value="7">7月</option>
                <option value="8">8月</option>
                <option value="9">9月</option>
                <option value="10">10月</option>
                <option value="11">11月</option>
                <option value="12">12月</option>
              </select>
            </div>
          </td>
        </tr>
        <tr>
          <th>計上種類</th>
          <td>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault1">
                全件
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                月次仕訳
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                再振替・決算仕訳
              </label>
            </div>
          </td>
        </tr>
        <tr>
          <th>付箋</th>
          <td>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault1">
                全件
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                付箋あり
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                ファイル添付あり
              </label>
            </div>
          </td>
        </tr>
        <tr>
          <th>入力種類区分</th>
          <td>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault1">
                全件
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                通常入力
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                データ読み込み
              </label>
            </div>
          </td>
        </tr>
        <tr>
          <th>出力順</th>
          <td>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault1">
                仕訳日付
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                入力日付
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                仕訳番号
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button class="btn btn-primary me-md-2" type="button">Button</button>
    </div>
  </div>
</template>
