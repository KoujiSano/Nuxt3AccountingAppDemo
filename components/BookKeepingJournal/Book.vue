<template>
  <b-h level="1">仕訳帳</b-h>
  <b-table class="table">
    <b-thead>
      <b-tr>
        <b-th>会計単位</b-th>
        <b-td>
          <select class="form-select" aria-label="選択してください。">
            <option value="1">本社</option>
          </select>
        </b-td>
      </b-tr>
      <b-tr>
        <b-th>対象仕訳番号</b-th>
        <b-td>
          <b-div class="mb-3">
            <b-form class="form-floating">
              <b-input
                type="text"
                class="form-control"
                id="floatingInputValue"
                placeholder="仕訳番号"
                value="0000000"
              />
              <b-label for="floatingInputValue">仕訳番号</b-label>
            </b-form>
          </b-div>
          <b-p>から</b-p>
          <b-div>
            <b-form class="form-floating">
              <b-input
                type="text"
                class="form-control"
                id="floatingInputValue"
                placeholder="仕訳番号"
                value="9999999"
              />
              <label for="floatingInputValue">仕訳番号</label>
            </b-form>
          </b-div>
        </b-td>
      </b-tr>
      <tr>
        <th>対象日付範囲</th>
        <td>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="targetDateRange"
              id="targetDateRange1"
              checked
            />
            <label class="form-check-label" for="targetDateRange1">
              仕訳日付
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="targetDateRange"
              id="targetDateRange2"
            />
            <label class="form-check-label" for="targetDateRange2">
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
              name="reportingType"
              id="reportingType1"
              checked
            />
            <label class="form-check-label" for="reportingType1"> 全件 </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="reportingType"
              id="reportingType2"
            />
            <label class="form-check-label" for="reportingType2">
              月次仕訳
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="reportingType"
              id="reportingType3"
            />
            <label class="form-check-label" for="reportingType3">
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
              name="tag"
              id="tag1"
              checked
            />
            <label class="form-check-label" for="tag1"> 全件 </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="tag" id="tag2" />
            <label class="form-check-label" for="tag2"> 付箋あり </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="tag" id="tag3" />
            <label class="form-check-label" for="tag3">
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
              name="inputTypeClassification"
              id="inputTypeClassification1"
              checked
            />
            <label class="form-check-label" for="inputTypeClassification1">
              全件
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="inputTypeClassification"
              id="inputTypeClassification2"
            />
            <label class="form-check-label" for="inputTypeClassification2">
              通常入力
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="inputTypeClassification"
              id="inputTypeClassification3"
            />
            <label class="form-check-label" for="inputTypeClassification3">
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
              name="outputOrder"
              id="outputOrder1"
              checked
            />
            <label class="form-check-label" for="outputOrder1">
              仕訳日付
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="outputOrder"
              id="outputOrder2"
            />
            <label class="form-check-label" for="outputOrder2">
              入力日付
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="outputOrder"
              id="outputOrder3"
            />
            <label class="form-check-label" for="outputOrder3">
              仕訳番号
            </label>
          </div>
        </td>
      </tr>
    </b-thead>
  </b-table>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <a
      href="/demo/book-keeping-journal/search#search"
      class="btn btn-primary"
      tabindex="-1"
      role="button"
      aria-disabled="true"
      >表示</a
    >
    <!-- <button class="btn btn-primary me-md-2" type="button">表示</button> -->
  </div>
</template>
