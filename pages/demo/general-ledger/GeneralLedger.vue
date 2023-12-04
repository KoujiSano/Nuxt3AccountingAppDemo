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
        <CardHeader>勘定項目</CardHeader>
        <ListGroup flush>
            <ListGroupItem>
              <BFormSelect aria-label="Default select example">
                <b-option selected>
                  100　現金
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
              <b-p text-alignment="center">
                から
              </b-p>
              <BFormSelect aria-label="Default select example">
                <b-option selected>
                  100　現金
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
              <ListGroupItem class="text-center">
                <ButtonGroup aria-label="Basic checkbox toggle button group" size="sm">
                  <CheckboxToggleButton button="outline-primary">
                  1月
                </CheckboxToggleButton>
                <CheckboxToggleButton button="outline-primary">
                  2月
                </CheckboxToggleButton>
                <CheckboxToggleButton button="outline-primary">
                  3月
                </CheckboxToggleButton>
                <CheckboxToggleButton button="outline-primary">
                  4月
                </CheckboxToggleButton>
                <CheckboxToggleButton button="outline-primary">
                  5月
                </CheckboxToggleButton>
                <CheckboxToggleButton button="outline-primary">
                  6月
                </CheckboxToggleButton>
                <CheckboxToggleButton button="outline-primary">
                  7月
                </CheckboxToggleButton>
                <CheckboxToggleButton button="outline-primary">
                  8月
                </CheckboxToggleButton>
                <CheckboxToggleButton button="outline-primary">
                  9月
                </CheckboxToggleButton>
                <CheckboxToggleButton button="outline-primary">
                  10月
                </CheckboxToggleButton>
                <CheckboxToggleButton button="outline-primary">
                  11月
                </CheckboxToggleButton>
                <CheckboxToggleButton button="outline-primary">
                  12月
                </CheckboxToggleButton>
              </ButtonGroup>
            </ListGroupItem>
        </ListGroup>
      </Card>
    </CardGroup>
    <CardGroup>
      <Card style="width:auto">
        <CardHeader>計上種類</CardHeader>
        <Row class="m-4">
          <Col>
            <BFormCheck>
              <BFormCheckInput
                v-model="radioValue"
                value="one"
                type="radio"
              />
              <BFormCheckLabel>全件</BFormCheckLabel>
            </BFormCheck>
            <BFormCheck>
              <BFormCheckInput
                v-model="radioValue"
                value="two"
                type="radio"
              />
              <BFormCheckLabel>月次仕訳</BFormCheckLabel>
            </BFormCheck>
            <BFormCheck>
              <BFormCheckInput
                v-model="radioValue"
                value="tree"
                type="radio"
              />
              <BFormCheckLabel>再振替・決算仕訳</BFormCheckLabel>
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
              <BFormCheckLabel>全件</BFormCheckLabel>
            </BFormCheck>
            <BFormCheck>
              <BFormCheckInput
                v-model="radioValue2"
                value="two"
                type="radio"
              />
              <BFormCheckLabel>月次仕訳</BFormCheckLabel>
            </BFormCheck>
          </Col>
        </Row>
      </Card>
    </CardGroup>
    <Card>
      <CardHeader>PDF・CSV出力条件</CardHeader>
      <Row class="m-4">
        <Col>
          <BFormCheck>
            <BFormCheckInput v-model="checkbox1" />
            <BFormCheckLabel>補助科目毎に出力</BFormCheckLabel>
          </BFormCheck>
          <BFormCheck>
            <BFormCheckInput v-model="checkbox2" />
            <BFormCheckLabel>月毎改ページ</BFormCheckLabel>
          </BFormCheck>
          <BFormCheck>
            <BFormCheckInput v-model="checkbox3" />
            <BFormCheckLabel>仕訳がある科目のみ出力</BFormCheckLabel>
          </BFormCheck>
        </Col>
      </Row>
    </Card>
  </Container>

</template>
<script setup>
const radioValue = ref('tree')
const radioValue2 = ref('two')
</script>