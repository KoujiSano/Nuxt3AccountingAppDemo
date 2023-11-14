<template>
    <container class="container">
        <div>
            <h1>レインボー決算報告書</h1>
            <Card class="text-center m-4">
                <CardHeader class="text-center">年度</CardHeader>
                <ListGroupItem class="m-3">
                    <select aria-label="Default select example">
                        <b-option value="1">
                            2023
                        </b-option>
                        <b-option value="2">
                            19XX
                        </b-option>
                    </select>
                </ListGroupItem>
                <CardHeader class="text-center">決算区分</CardHeader>
                <ListGroupItem class="m-3">
                    <ButtonGroup aria-label="Basic checkbox toggle button group">
                        <RadioToggleButton name="btnradio-kbn" button="outline-success">
                            期末決算
                        </RadioToggleButton>
                        <RadioToggleButton name="btnradio-kbn" button="outline-danger">
                            中間決算
                        </RadioToggleButton>
                    </ButtonGroup>
                </ListGroupItem>
                <CardHeader class="text-center">決算区分</CardHeader>
                <ListGroupItem class="m-3">
                    <ButtonGroup aria-label="Basic checkbox toggle button group">
                        <RadioToggleButton name="btnradio-zei" button="outline-success">
                            脱税集計
                        </RadioToggleButton>
                        <RadioToggleButton name="btnradio-zei" button="outline-danger">
                            税込集計
                        </RadioToggleButton>
                    </ButtonGroup>
                </ListGroupItem>
                <CardHeader class="text-center">決算区分</CardHeader>
                <ListGroupItem class="m-3">
                    <ButtonGroup aria-label="Basic checkbox toggle button group">
                        <RadioToggleButton name="btnradio-syk" button="outline-success">
                            報告式
                        </RadioToggleButton>
                        <RadioToggleButton name="btnradio-syk" button="outline-danger">
                            感情式
                        </RadioToggleButton>
                    </ButtonGroup>
                </ListGroupItem>
                <CardHeader class="text-center">A4縦様式</CardHeader>
                <ListGroupItem class="m-3">
                    <ButtonGroup aria-label="Basic checkbox toggle button group">
                        <CheckboxToggleButton button="outline-primary" id="A4" v-model="A4">
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
                        <CheckboxToggleButton button="outline-primary" id="A3" v-model="A3">
                            株主資本等変動計算書
                        </CheckboxToggleButton>
                    </ButtonGroup>
                </ListGroupItem>
            </Card>
        </div>
    </container>
</template>

<style scoped></style>

<script>
</script>