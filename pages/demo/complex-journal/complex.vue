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
</template>        

<script setup>
useHead({
  title: 'My home page'
})

const selected = ref('')

</script>