<template>
    <Container>
      <CardGroup>
        <Card style="width:auto">
          <CardHeader>会計単位</CardHeader>
            <ListGroup flush>
              <ListGroupItem>
                <BFormSelect aria-label="Default select example">
                  <b-option selected>
                    本社
                  </b-option>
                  <b-option value="1">
                    仮１
                  </b-option>
                  <b-option value="2">
                    仮２
                  </b-option>
                  <b-option value="3">
                    仮３
                  </b-option>
                </BFormSelect>
              </ListGroupItem>
          </ListGroup>
        </Card>
        <Card>
          <CardHeader>部門</CardHeader>
          <ListGroup flush>
              <ListGroupItem>
                <BFormSelect aria-label="Default select example">
                  <b-option selected>
                    指定なし
                  </b-option>
                  <b-option value="1">
                    仮１
                  </b-option>
                  <b-option value="2">
                    仮２
                  </b-option>
                  <b-option value="3">
                    仮３
                  </b-option>
                </BFormSelect>
              </ListGroupItem>
          </ListGroup>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card style="width:auto">
          <CardHeader>年度</CardHeader>
          <ListGroup class="m-2">
                <BFormSelect aria-label="Default select example">
                  <b-option selected>
                    2023
                  </b-option>
                  <b-option value="1">
                    20xx
                  </b-option>
                  <b-option value="2">
                    20xx
                  </b-option>
                  <b-option value="3">
                    20xx
                  </b-option>
                </BFormSelect>
          </ListGroup>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card style="width:auto">
          <CardHeader>表示区分</CardHeader>
          <Row class="m-4">
            <Col>
              <BFormCheck>
                <BFormCheckInput
                  v-model="radioValue"
                  value="one"
                  type="radio"
                />
                <BFormCheckLabel>各月</BFormCheckLabel>
              </BFormCheck>
              <BFormCheck>
                <BFormCheckInput
                  v-model="radioValue"
                  value="two"
                  type="radio"
                />
                <BFormCheckLabel>四半期</BFormCheckLabel>
              </BFormCheck>
              <!-- <b-dl margin="t-5">
                <b-dt col="sm-3">
                  Selected Value
                </b-dt>
                <b-dd col="sm-9">
                  {{ radioValue }}
                </b-dd>
              </b-dl> -->
            </Col>
          </Row>
        </Card>
        <Card>
          <CardHeader>消費税</CardHeader>
          <Row class="m-4">
            <Col>
                <BFormCheck>
                <BFormCheckInput
                  v-model="radioValue2"
                  value="one"
                  type="radio"
                />
                <BFormCheckLabel>税抜集計</BFormCheckLabel>
              </BFormCheck>
              <BFormCheck>
                <BFormCheckInput
                  v-model="radioValue2"
                  value="two"
                  type="radio"
                />
                <BFormCheckLabel>税込集計</BFormCheckLabel>
              </BFormCheck>
            </Col>
          </Row>
        </Card>
      </CardGroup>
      <Card>
          <CardHeader>比較区分</CardHeader>
          <Row class="m-4">
            <Col>
                <BFormCheck>
                <BFormCheckInput
                  v-model="radioValue3"
                  value="one"
                  type="radio"
                />
                <BFormCheckLabel>前月比</BFormCheckLabel>
              </BFormCheck>
              <BFormCheck>
                <BFormCheckInput
                  v-model="radioValue3"
                  value="two"
                  type="radio"
                />
                <BFormCheckLabel>前年同月比</BFormCheckLabel>
              </BFormCheck>
              <BFormCheck>
                <BFormCheckInput
                  v-model="radioValue3"
                  value="tree"
                  type="radio"
                />
                <BFormCheckLabel>構成比</BFormCheckLabel>
              </BFormCheck>
              <BFormCheck>
                <BFormCheckInput
                  v-model="radioValue3"
                  value="four"
                  type="radio"
                />
                <BFormCheckLabel>なし</BFormCheckLabel>
              </BFormCheck>
            </Col>
          </Row>
        </Card>
      <Card>
        <CardHeader>出力範囲</CardHeader>
        <Row class="m-4">
          <Col>
            <BFormCheck>
              <BFormCheckInput v-model="checkbox1" />
              <BFormCheckLabel>決算整理仕訳の金額を表示する</BFormCheckLabel>
            </BFormCheck>
          </Col>
        </Row>
      </Card>
      <Card class="mb-3 mt-3">
        <b-button button="primary" size="lg">
          表示
        </b-button>
      </Card>
    </Container>
  
  </template>
  <script setup>
  const radioValue = ref('two')
  const radioValue2 = ref('two')
  const radioValue3 = ref('four')
  </script>