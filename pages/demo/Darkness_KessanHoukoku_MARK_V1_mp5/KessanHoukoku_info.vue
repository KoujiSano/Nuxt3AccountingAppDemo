<script setup lang="ts">
import { yeardata,kubundata } from '@/composables/DarknessData'
const year = yeardata()
const kubun = kubundata()
</script>

<template>
  <container>
    <div>
      <h1 class="mb-4">塩分を冥府に提出</h1>
      <Card class="text-center m-2">
        <CardHeader class="text-center">会計年度</CardHeader>
        <ListGroupItem class="m-3">
          <h2>{{ year }}</h2>
        </ListGroupItem>
        <CardHeader class="text-center">決算区分</CardHeader>
        <ListGroupItem class="m-3">
          <h2>{{ kubun }}</h2>
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
      <b-a button="primary" href="/demo/Darkness_KessanHoukoku_MARK_V1_mp5/KessanHoukoku" class="m-2">
        戻る
      </b-a>
    </div>
  </container></template>