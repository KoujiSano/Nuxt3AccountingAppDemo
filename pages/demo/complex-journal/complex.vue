<template>
<div class="container">
  <div class="card">
    <div class="card-body">
      <h1>複合仕訳入力</h1>
      <div class="row">
        <div class="col-6">
          <div class="input-group mb-3">
            <thead>
              <tr>
                <th>年度<ReusableSelect :options="select1Options" :size="select1Size" /></th>
                <th>区分<ReusableSelect :options="select2Options" :size="select2Size" /></th>
                <th>会計単位<ReusableSelect :options="select3Options" :size="select3Size" /></th>
                <th>消費税<ReusableSelect :options="select4Options" :size="select4Size" /></th>
                <th>対象期間<ReusableSelect :options="select5Options" :size="select5Size" /></th>
              </tr>
            </thead>
          </div>
          <b-div padding="t-3" class="d-flex justify-content-start align-items-center p-3">
    <b-button button="outline-primary" margin="e-2">
        ＜前月
    </b-button>
    <h2 margin="e-2">6月</h2>
    <b-button button="outline-primary" margin="e-2">
        翌月＞
    </b-button>
</b-div>
            <tbody>
              <tr>
                <span class="input-group-text"><td>科目</td></span>
                <input type="text" class="form-control" aria-label="jurnaNo">
                <span class="input-group-text"><td>補助</td></span>
                <input type="text" class="form-control" aria-label="jurnaNo">
                <span class="input-group-text"><td>名称</td></span>
                <input type="text" class="form-control" aria-label="jurnaNo">
                <span class="input-group-text"><td>金額</td></span>
                <input type="text" class="form-control" aria-label="jurnaNo">
                <span class="input-group-text"><td>消費税区分</td></span>
                <input type="text" class="form-control" aria-label="jurnaNo">
                <span class="input-group-text"><td>消費税</td></span>
                <input type="text" class="form-control" aria-label="jurnaNo">
                <span class="input-group-text"><td>部門</td></span>
                <input type="text" class="form-control" aria-label="jurnaNo">
                <span class="input-group-text"><td>摘要</td></span>
                <input type="text" class="form-control" aria-label="jurnaNo">
              </tr>
            </tbody>
            
          <div class="btn-box">
        <div class="col-btn-search-code"><a href="javascript:void(0);" onclick="doSearchCode();return false" class="btn btn-xs btn-default">検索</a></div>
        <div class="col-btn-account-bookmark"><a href="javascript:void(0);" onclick="doListAccountBookmark();return false" class="btn btn-xs btn-default"><span class="glyphicon glyphicon-star text-primary" aria-hidden="true"></span>科目</a></div>
        <div class="col-btn-clear"><a href="javascript:void(0);" onclick="doClear();return false" class="btn btn-xs btn-default">クリア</a></div>
        <div class="col-btn-copy"><a href="javascript:void(0);" onclick="doCopy();return false" class="btn btn-xs btn-default">行コピー</a></div>
        <div class="col-btn-past"><a href="javascript:void(0);" onclick="doPast();return false" class="btn btn-xs btn-default">行貼付</a></div>
        <div class="col-btn-insert"><a href="javascript:void(0);" onclick="doInsert();return false" class="btn btn-xs btn-default">行挿入</a></div>
        <div class="col-btn-delete"><a href="javascript:void(0);" onclick="doDelete();return false" class="btn btn-xs btn-default">行削除</a></div>
        <div class="col-btn-duplicate"><a href="javascript:void(0);" class="btn btn-xs btn-default" data-original-title="" title="">複写</a></div>
        <div class="col-btn-flipdc"><a href="javascript:void(0);" onclick="doFlipDC();return false" class="btn btn-xs btn-default">貸借入れ替え</a></div>

        <div class="col-btn-pattern"><a href="javascript:void(0);" onclick="registerPattern();return false;" class="btn btn-xs btn-default">パターン登録</a></div>
        <div class="col-btn-cancel"><a href="javascript:void(0);" onclick="doCancel();return false;" class="btn btn-xs btn-default">取消</a></div>
        <div class="col-btn-register" id="btn_save"><a href="javascript:void(0);" onclick="registerJournal()" class="btn btn-xs btn-default">登録</a></div>
        <div class="col-btn-delete" id="btn_delete" style="display: none;"><a href="javascript:void(0);" onclick="deleteJournal()" class="btn btn-xs btn-default">削除</a></div>
    </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import ReusableSelect from '~/components/ReusableSelect.vue';

useHead({
  title: 'My home page'
})

const select1Options = [
  { label: '2023', value: 'optionA' },
  { label: '2024', value: 'optionB' },
];
const select1Size = '70px';

const select2Options = [
  { label: '月次', value: 'optionA' },
  { label: '決算（中間）', value: 'optionB' },
  { label: '決算（期末）', value: 'optionC' },
  { label: '決算再振替', value: 'optionD' },
  { label: '期中', value: 'optionE' },
];
const select2Size = '115px';

const select3Options = [
  { label: '本社', value: 'optionE' },
];
const select3Size = '70px';

const select4Options = [
  { label: '原則課税/税抜処理', value: 'optionG' },
];
const select4Size = '170px';

const select5Options = [
  { label: '2023/1/1 ~ 2023/1/30', value: 'optionA' },
  { label: '2023/2/1 ~ 2023/2/28', value: 'optionB' },
  { label: '2023/3/1 ~ 2023/3/31', value: 'optionC' },
  { label: '2023/4/1 ~ 2023/4/30', value: 'optionD' },
  { label: '2023/5/1 ~ 2023/5/31', value: 'optionE' },
  { label: '2023/6/1 ~ 2023/6/30', value: 'optionF' },
  { label: '2023/7/1 ~ 2023/7/31', value: 'optionG' },
  { label: '2023/8/1 ~ 2023/8/31', value: 'optionH' },
  { label: '2023/9/1 ~ 2023/9/30', value: 'optionI' },
  { label: '2023/10/1 ~ 2023/10/31', value: 'optionJ' },
  { label: '2023/11/1 ~ 2023/11/30', value: 'optionK' },
  { label: '2023/12/1 ~ 2023/12/31', value: 'optionL' },
];
const select5Size = '200px';

</script>