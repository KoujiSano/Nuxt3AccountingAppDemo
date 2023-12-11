<script setup lang="ts">
const financialData = userData();
const User = pData();

</script>

<template>
  <container>
    <div>
      <h1 class="mb-4">塩分を冥府に提出</h1>
      <Card class="text-center m-2">
        <CardHeader class="text-center">会計年度</CardHeader>
        <ListGroupItem class="m-3">
          <h2>{{ financialData.Year }}</h2>
        </ListGroupItem>
        <CardHeader class="text-center">決算区分</CardHeader>
        <ListGroupItem class="m-3">
          <h2>{{ financialData.Kubun }}</h2>
        </ListGroupItem>
        <CardHeader class="text-center">会計期間</CardHeader>
        <ListGroupItem class="m-3">
          <Row>
            <Col class="m-2"
              ><input type="date" class="form-control" aria-label="date1"
            /></Col>
            <Col class="m-2" col="md-auto">
              <h3>～</h3>
            </Col>
            <Col class="m-2"
              ><input type="date" class="form-control" aria-label="date2"
            /></Col>
          </Row>
        </ListGroupItem>
      </Card>
      <BInputGroup class="m-2">
        <BInputGroupText id="zyusyo1">決算期</BInputGroupText>
        <BFormInput
          type="text"
          placeholder="決算期"
          v-model="User.KessanKi"
          aria-describedby="zyusyo1"
        >
        </BFormInput>
      </BInputGroup>
      <BInputGroup class="m-2">
        <BInputGroupText id="zyusyo1">会社名称</BInputGroupText>
        <BFormInput
          type="text"
          placeholder="会社名称"
          v-model="User.CompanyName"
          aria-describedby="zyusyo1"
        >
        </BFormInput>
      </BInputGroup>

      <BInputGroup class="m-2">
        <BInputGroupText id="zyusyo1">住所</BInputGroupText>
        <BFormInput
          type="text"
          placeholder="住所"
          v-model="User.Address"
          aria-describedby="zyusyo1"
        >
        </BFormInput>
      </BInputGroup>
      <BInputGroup class="m-2">
        <BInputGroupText id="zyusyo1">住所2</BInputGroupText>
        <BFormInput
          type="text"
          placeholder="住所2"
          v-model="User.Address2"
          aria-describedby="zyusyo1"
        >
        </BFormInput>
      </BInputGroup>
      <b-a
        button="primary"
        href="/demo/financial-statement/KessanHoukoku"
        class="m-2"
      >
        確認
      </b-a>
    </div>
  </container>
</template>
