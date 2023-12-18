<template>
  <BookKeepingJournalBook />
  <Row gutter="x-5">
    <Col>
      <b-div padding="3">
        <b-p
          ><small>
            ※
            摘要に32文字を超える入力がある場合、PDF出力では33文字以降は省略されて出力されます。
          </small></b-p
        >
      </b-div>
    </Col>
    <Col>
      <b-div
        display="grid md-flex"
        padding="3"
        gap="2"
        justify-content="md-end"
      >
        <b-button button="secondary" size="sm" type="button">
          PDF出力
        </b-button>
        <b-button button="secondary" size="sm" type="button">
          CSV出力
        </b-button>
      </b-div>
    </Col>
  </Row>

  <BookKeepingJournalSearch />
</template>
