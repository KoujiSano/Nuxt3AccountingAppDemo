<script setup lang="ts">
import { userdata } from '@/composables/DarknessData'
useHead({ title: '決算報告書' })
const KessanData = userdata()
const setkubun = (kbn:any) => (KessanData.value.Kubun= kbn)
</script>
<template>
    <Container>
      <h1 class="mb-3">Xx刹那漆黒xX決算報告書</h1>
      <Card class="text-center">
        <CardHeader class="text-center">年度</CardHeader>
        <ListGroupItem class="m-3">
          <select aria-label="Default select example" v-model="KessanData.Year">
            <b-option hidden>選択してください</b-option >
            <b-option value="2000"> 2023 </b-option >
            <b-option value="2021"> 2022 </b-option>
          </select>
        </ListGroupItem>
        <CardHeader class="text-center">決算区分</CardHeader>
        <ListGroupItem class="m-3">
          <ButtonGroup aria-label="Basic checkbox toggle button group">
            <RadioToggleButton name="btnradio-kbn" button="outline-success" @click="() => setkubun('期末決算')">
              期末決算
            </RadioToggleButton>
            <RadioToggleButton name="btnradio-kbn" button="outline-danger" @click="() => setkubun('中間決算')">
              中間決算
            </RadioToggleButton>
          </ButtonGroup>
        </ListGroupItem>
        <CardHeader class="text-center">消費税</CardHeader>
        <ListGroupItem class="m-3">
          <ButtonGroup aria-label="Basic checkbox toggle button group">
            <RadioToggleButton name="btnradio-zei" button="outline-success">
              税抜集計
            </RadioToggleButton>
            <RadioToggleButton name="btnradio-zei" button="outline-danger">
              税込集計
            </RadioToggleButton>
          </ButtonGroup>
        </ListGroupItem>
        <CardHeader class="text-center">出力様式</CardHeader>
        <ListGroupItem class="m-3">
          <ButtonGroup aria-label="Basic checkbox toggle button group">
            <RadioToggleButton name="btnradio-syk" button="outline-success">
              報告式
            </RadioToggleButton>
            <RadioToggleButton name="btnradio-syk" button="outline-danger">
              勘定式
            </RadioToggleButton>
          </ButtonGroup>
        </ListGroupItem>
        <CardHeader class="text-center">A4縦様式</CardHeader>
        <ListGroupItem class="m-3">
          <ButtonGroup aria-label="Basic checkbox toggle button group">
            <CheckboxToggleButton button="outline-primary">
              貸借対照表
            </CheckboxToggleButton>
            <CheckboxToggleButton button="outline-primary">
              損益計算書
            </CheckboxToggleButton>
            <CheckboxToggleButton button="outline-primary">
              製造原価報告書
            </CheckboxToggleButton>
            <CheckboxToggleButton button="outline-primary">
              販売費・一般管理費内訳書
            </CheckboxToggleButton>
            <CheckboxToggleButton button="outline-primary">
              株主資本等変動計算書
            </CheckboxToggleButton>
            <CheckboxToggleButton button="outline-primary">
              個別注記表
            </CheckboxToggleButton>
          </ButtonGroup>
        </ListGroupItem>
        <CardHeader class="text-center">A3横様式</CardHeader>
        <ListGroupItem class="m-3">
          <ButtonGroup aria-label="Basic checkbox toggle button group">
            <CheckboxToggleButton button="outline-primary">
              株主資本等変動計算書
            </CheckboxToggleButton>
          </ButtonGroup>
        </ListGroupItem>
      </Card>
      <b-a button="primary" href="/demo/Darkness_KessanHoukoku_MARK_V1_mp5/KessanHoukoku_info" class="m-2">
        報告書情報設定
      </b-a>
      <b-a button="primary" href="/demo/Darkness_KessanHoukoku_MARK_V1_mp5/KessanHoukoku_info" class="m-2">
        報告書情報設定
      </b-a>
    </Container>
</template>

<style></style>