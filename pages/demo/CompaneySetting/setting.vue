<template>
    <div class="card mb-4" style="max-width: auto;">
        <div class="card text-center">
            <div class="card-header bg-info">
                会計期間
            </div>
            <label for="inputPassword5" class="form-label">期首日 ※必須</label>
            <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock">
            <div id="passwordHelpBlock" class="form-text">
                <h5>* 会計年度 2023年<br>
                    * 会計期間 2023年4月1日 から 2024年3月31日</h5>
                期首日を元に1年後の日付が期末日として自動計算されます。
                会計年度は期首日の年となります。
                期中開始する場合も、期首日を求めて入力してください。
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                <label class="form-check-label" for="inlineCheckbox1">1</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                <label class="form-check-label" for="inlineCheckbox2">2</label>
            </div>
        </div>
    </div>
    <div>
        <ul>
            <p>決算報告書画面で決算書に表示する会計期間を変更することができます。</p>
            <p>決算期は法人用決算報告書に出力されます。</p>
            <p>仕訳番号のリセットは当年度以降の仕訳が存在している場合、変更することはできません。</p>
        </ul>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
        <label class="form-check-label" for="inlineCheckbox1">1</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
        <label class="form-check-label" for="inlineCheckbox2">2</label>
    </div>
    <br>
    <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off">
    <label class="btn btn-primary" for="btn-check">確認</label>
</template>