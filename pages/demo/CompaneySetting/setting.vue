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
                <label class="form-check-label" for="reportingType1">
                  全件
                </label>
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
                <label class="form-check-label" for="tag1">
                  全件
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="tag"
                  id="tag2"
                />
                <label class="form-check-label" for="tag2">
                  付箋あり
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="tag"
                  id="tag3"
                />
                <label class="form-check-label" for="tag3">
                  ファイル添付あり
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <th>業者区分</th>
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
                  課税
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
                  免税
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <th>経理処理付方式</th>
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
                  税抜処理
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
                  税込処理
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <th>業者区分</th>
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
                  課税
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
                  免税
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <th>端数処理 (売上)</th>
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
                    切り捨て
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
                    四捨五入
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
                    切り上げ
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <th>端数処理 (仕入)</th>
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
                    切り捨て
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
                    四捨五入
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
                    切り上げ
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>