<template>
  <Container>
    <CardGroup>
      <Card style="width:auto">
        <CardHeader>年度</CardHeader>
          <ListGroup flush>
            <ListGroupItem>
              <BFormSelect aria-label="Default select example">
                <b-option selected>
                  選択してください
                </b-option>
                <b-option value="1">
                  2024
                </b-option>
              </BFormSelect>
            </ListGroupItem>
        </ListGroup>
      </Card>
      <Card>
        <CardHeader>区分</CardHeader>
          <ListGroup flush>
            <ListGroupItem>
              <BFormSelect aria-label="Default select example">
                <b-option selected>
                  選択してください
                </b-option>
                <b-option value="1">
                  月次
                </b-option>
                <b-option value="2">
                  決算（中間）
                </b-option>
                <b-option value="3">
                  決算（期末）
                </b-option>
                <b-option value="4">
                  決算再振替
                </b-option>
                <b-option value="5">
                  期中
                </b-option>
              </BFormSelect>
            </ListGroupItem>
        </ListGroup>
      </Card>
      <Card>
        <CardHeader>会計単位</CardHeader>
          <ListGroup flush>
            <ListGroupItem>
              <BFormSelect aria-label="Default select example">
                <b-option selected>
                  選択してください
                </b-option>
                <b-option value="1">
                  本社
                </b-option>
              </BFormSelect>
            </ListGroupItem>
        </ListGroup>
      </Card>
    </CardGroup>
    <CardGroup>
      <Card style="width:auto">
        <CardHeader>消費税</CardHeader>
          <ListGroup flush>
            <ListGroupItem>
              <BFormSelect aria-label="Default select example">
                <b-option selected>
                  選択してください
                </b-option>
                <b-option value="1">
                  原則課税/税抜き処理
                </b-option>
              </BFormSelect>
            </ListGroupItem>
        </ListGroup>
      </Card>
      <Card>
        <CardHeader>対象期間</CardHeader>
          <ListGroup flush>
            <ListGroupItem>
              <BFormSelect aria-label="Default select example">
                <b-option selected>
                  選択してください
                </b-option>
                <b-option value="1">
                  2024/1/1 ~ 2024/1/31
                </b-option>
                <b-option value="2">
                  2024/2/1 ~ 2024/2/29
                </b-option>
                <b-option value="3">
                  2024/3/1 ~ 2024/3/31
                </b-option>
                <b-option value="4">
                  2024/4/1 ~ 2024/4/30
                </b-option>
                <b-option value="5">
                  2024/5/1 ~ 2024/5/31
                </b-option>
                <b-option value="6">
                  2024/6/1 ~ 2024/6/30
                </b-option>
                <b-option value="7">
                  2024/7/1 ~ 2024/7/31
                </b-option>
                <b-option value="8">
                  2024/8/1 ~ 2024/8/31
                </b-option>
                <b-option value="9">
                  2024/9/1 ~ 2024/9/30
                </b-option>
                <b-option value="10">
                  2024/10/1 ~ 2024/10/31
                </b-option>
                <b-option value="11">
                  2024/11/1 ~ 2024/11/30
                </b-option>
                <b-option value="12">
                  2024/12/1 ~ 2024/12/31
                </b-option>
              </BFormSelect>
            </ListGroupItem>
        </ListGroup>
      </Card>
    </CardGroup>
    
    <ButtonGroup aria-label="Basic outlined example">
    <b-button margin="e-4" button="outline-primary">
      ＜前月
    </b-button>
    <h1>
      6月
    </h1>
    <b-button margin="s-4" button="outline-primary">
      翌月＞
    </b-button>
    </ButtonGroup>


    <Card style="width:auto">
        <CardHeader>科目</CardHeader>
          <ListGroup flush>
            <ListGroupItem>
              <BFormSelect aria-label="Default select example">
                <b-option selected>
                  お気に入り科目
                </b-option>
                <b-option value="1">
                  142 売掛金
                </b-option>
                <b-option value="2">
                  755 旅費交通費
                </b-option>
                <b-option value="3">
                  756 通信費
                </b-option>
                <b-option value="4">
                  760 消耗品費
                </b-option>
                <b-option value="5">
                  766 支払手数料
                </b-option>
                <b-option value="6">
                  789 雑費
                </b-option>
              </BFormSelect>
            </ListGroupItem>
        </ListGroup>
      </Card>
      <Card>
        <CardHeader>補助</CardHeader>
          <ListGroup flush>
            <ListGroupItem>
              <BFormInput aria-label="Default select example">
              </BFormInput>
            </ListGroupItem>
        </ListGroup>
      </Card>
      <Card>
        <CardHeader>名称</CardHeader>
          <ListGroup flush>
            <ListGroupItem>
              <BFormInput aria-label="Default select example">
              </BFormInput>
            </ListGroupItem>
        </ListGroup>
      </Card>
      <Card>
        <CardHeader>金額</CardHeader>
          <ListGroup flush>
            <ListGroupItem>
              <BFormInput aria-label="Default select example">
              </BFormInput>
            </ListGroupItem>
        </ListGroup>
      </Card>
      <Card>
        <CardHeader>消費税区分</CardHeader>
          <ListGroup flush>
            <ListGroupItem>
              <BFormSelect aria-label="Default select example">
                <b-option selected>
                  選択してください
                </b-option>
                <b-option value="1">
                  対象外
                </b-option>
                <b-option value="2">
                  内税
                </b-option>
                <b-option value="3">
                  外税
                </b-option>
              </BFormSelect>
            </ListGroupItem>
        </ListGroup>
      </Card>
      <Card>
        <CardHeader>消費税</CardHeader>
          <ListGroup flush>
            <ListGroupItem>
              <BFormInput aria-label="Default select example">
              </BFormInput>
            </ListGroupItem>
        </ListGroup>
      </Card>
      <Card>
        <CardHeader>部門</CardHeader>
          <ListGroup flush>
            <ListGroupItem>
              <BFormInput aria-label="Default select example">
              </BFormInput>
            </ListGroupItem>
        </ListGroup>
      </Card>
      <Card>
        <CardHeader>摘要</CardHeader>
          <ListGroup flush>
            <ListGroupItem>
              <BFormInput aria-label="Default select example">
              </BFormInput>
            </ListGroupItem>
        </ListGroup>
      </Card>

      <ButtonGroup aria-label="Basic example">
        <b-button button="light">
          検索
        </b-button>
        <b-button button="light">
          科目
        </b-button>
        <b-button button="light">
          クリア
        </b-button>
        <b-button button="light">
          行コピー
        </b-button>
        <b-button button="light">
          行貼り付け
        </b-button>
      </ButtonGroup>
      <ButtonGroup aria-label="Basic example">
        <b-button button="light">
          行挿入
        </b-button>
        <b-button button="light">
          行削除
        </b-button>
        <b-button button="light">
          複写
        </b-button>
        <b-button button="light">
          賃借入れ替え
        </b-button>
      </ButtonGroup>
      <ButtonGroup aria-label="Basic example">
        <b-button button="light">
          パターン登録
        </b-button>
        <b-button button="light">
          取り消し
        </b-button>
        <b-button button="light">
          登録
        </b-button>
        <b-button button="light">
          削除
        </b-button>
      </ButtonGroup>

  </Container>


  <div class="container d-flex align-items-center justify-content-center min-vh-100">
    <div class="card">
      <div class="card-body">
        <h1 class="mb-4">複合仕訳入力</h1>

        <div class="row">
          <div class="col-md-12">
            <div class="input-group mb-3">
              <label class="input-group-text">年度</label>
              <ReusableSelect :options="select1Options" :size="select1Size" />
              <label class="input-group-text">区分</label>
              <ReusableSelect :options="select2Options" :size="select2Size" />
              <label class="input-group-text">会計単位</label>
              <ReusableSelect :options="select3Options" :size="select3Size" />
              <label class="input-group-text">消費税</label>
              <ReusableSelect :options="select4Options" :size="select4Size" />
              <label class="input-group-text">対象期間</label>
              <ReusableSelect :options="select5Options" :size="select5Size" />
            </div>
          </div>
        </div>

          <div class="col-md-6 d-flex justify-content-md-left mb-4">
            <button class="btn btn-outline-primary me-md-2 mb-2 mb-md-0">＜前月</button>
            <h2 class="me-2">6月</h2>
            <button class="btn btn-outline-primary me-md-2 mb-2 mb-md-0">翌月＞</button>
          </div>
        

        <div class="row">
          <div class="col-md-6">
            <div class="d-flex flex-column mb-3">
              <label class="input-group-text">科目</label>
              <select class="form-select" aria-label="jurnaNo">
                <option value="" selected disabled>お気に入り科目</option>
                <option value="subject1">142 売掛金</option>
                <option value="subject2">755 旅費交通費</option>
                <option value="subject3">756 通信費</option>
                <option value="subject4">760 消耗品費</option>
                <option value="subject5">766 支払手数料</option>
                <option value="subject6">789 雑費</option>
              </select>
              <label class="input-group-text">補助</label>
              <input type="text" class="form-control" aria-label="jurnaNo">
              <label class="input-group-text">名称</label>
              <input type="text" class="form-control" aria-label="jurnaNo">
              <label class="input-group-text">金額</label>
              <input type="text" class="form-control" aria-label="jurnaNo">
              <label class="input-group-text">消費税区分</label>
              <select class="form-select" aria-label="jurnaNo">
                <option value="" selected disabled></option>
                <option value="subject1">対象外</option>
                <option value="subject2">内税</option>
                <option value="subject3">外税</option>
              </select>
              <label class="input-group-text">消費税</label>
              <input type="text" class="form-control" aria-label="jurnaNo">
              <label class="input-group-text">部門</label>
              <input type="text" class="form-control" aria-label="jurnaNo">
              <label class="input-group-text">摘要</label>
              <input type="text" class="form-control" aria-label="jurnaNo">
            </div>
          </div>
        </div>
        
        <div class="btn-box row">
          <div class="input-group mb-3">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <a href="#" onclick="doClear();return false" class="btn btn-outline-secondary btn-sm">検索</a>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <a href="#" onclick="doClear();return false" class="btn btn-outline-secondary btn-sm">科目</a>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <a href="#" onclick="doClear();return false" class="btn btn-outline-secondary btn-sm">クリア</a>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <a href="#" onclick="doClear();return false" class="btn btn-outline-secondary btn-sm">行コピー</a>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <a href="#" onclick="doClear();return false" class="btn btn-outline-secondary btn-sm">行貼り付け</a>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <a href="#" onclick="doClear();return false" class="btn btn-outline-secondary btn-sm">行挿入</a>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <a href="#" onclick="doClear();return false" class="btn btn-outline-secondary btn-sm">行削除</a>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <a href="#" onclick="doClear();return false" class="btn btn-outline-secondary btn-sm">複写</a>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <a href="#" onclick="doClear();return false" class="btn btn-outline-secondary btn-sm">貸借入れ替え</a>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <a href="#" onclick="doClear();return false" class="btn btn-outline-secondary btn-sm">パターン登録</a>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <a href="#" onclick="doClear();return false" class="btn btn-outline-secondary btn-sm">取り消し</a>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <a href="#" onclick="doClear();return false" class="btn btn-outline-secondary btn-sm">登録</a>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <a href="#" onclick="doClear();return false" class="btn btn-outline-secondary btn-sm">削除</a>
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

const selected = ref('')

const select1Options = [
  { label: '2023', value: 'optionA' },
  { label: '2024', value: 'optionB' },
];
const select1Size = '72px';

const select2Options = [
  { label: '月次', value: 'optionA' },
  { label: '決算（中間）', value: 'optionB' },
  { label: '決算（期末）', value: 'optionC' },
  { label: '決算再振替', value: 'optionD' },
  { label: '期中', value: 'optionE' },
];
const select2Size = '125px';

const select3Options = [
  { label: '本社', value: 'optionE' },
];
const select3Size = '70px';

const select4Options = [
  { label: '原則課税/税抜処理', value: 'optionG' },
];
const select4Size = '177px';

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
const select5Size = '215px';

</script>