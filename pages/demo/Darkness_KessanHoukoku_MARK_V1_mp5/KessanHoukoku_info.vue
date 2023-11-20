<script setup lang="ts">
const darkness = DarknessData()
const kubunset = (kubun: string) => {
  darkness.kubun = kubun;
};
</script>

<template>
  <container>
    <div>
      <h1 class="mb-4">泡沫飛沫🤧</h1>
      <Card class="text-center m-2">
        <CardHeader class="text-center">会計年度</CardHeader>
        <ListGroupItem class="m-3">
          <h2>{{ darkness.year }}</h2>
        </ListGroupItem>
        <CardHeader class="text-center">決算区分</CardHeader>
        <ListGroupItem class="m-3">
          <h2>{{ darkness.kubun }}</h2>
        </ListGroupItem>
        <ListGroupItem class="m-3">
          <ButtonGroup aria-label="Basic checkbox toggle button group">
            <RadioToggleButton name="btnradio-kbn" button="outline-success" @click="kubunset('期末決算')">
              期末決算
            </RadioToggleButton>
            <RadioToggleButton name="btnradio-kbn" button="outline-danger" @click="kubunset('中間決算')">
              中間決算
            </RadioToggleButton>
          </ButtonGroup>
        </ListGroupItem>
        <CardHeader class="text-center">会計期間</CardHeader>
        <ListGroupItem class="m-3">
          <Row>
            <Col class="m-2"><input type="date" class="form-control" aria-label="date1"></Col>
            <Col class="m-2" col="md-auto">
            <h3>～</h3>
            </Col>
            <Col class="m-2"><input type="date" class="form-control" aria-label="date2"></Col>
          </Row>
        </ListGroupItem>
      </Card>
    </div>
  </container></template>