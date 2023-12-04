<template>
    <div class="p-4">
        <Card style="width: auto">
            <CardHeader class="text-center">会計単位</CardHeader>
                <ListGroup flush class="text-center">
                    <ListGroupItem>
                        <BFormSelect
                        margin="x-auto"
                        relative-width="25"
                        class="text-center">
                            <b-option selected>
                            本社
                            </b-option>
                        </BFormSelect>
                    </ListGroupItem>
                    <CardHeader class="text-center">鑑定科目</CardHeader>
                        <ListGroupItem>
                                <BFormSelect
                                margin="x-auto"
                                relative-width="25"
                                class="text-center">
                                    <b-option selected>
                                    100 現金
                                    </b-option>
                                    <b-option selected>
                                    101 小口現金
                                    </b-option>
                                    <b-option selected>
                                    110 当座預金
                                    </b-option>
                                    <b-option selected>
                                    115 普通預金
                                    </b-option>
                                    <b-option selected>
                                    120 通知預金
                                    </b-option>
                                    <b-option selected>
                                    124 定期預金
                                    </b-option><b-option selected>
                                    128 定期積金
                                    </b-option>
                                    <b-option selected>
                                    129 別段預金
                                    </b-option><b-option selected>
                                    130 郵便貯金
                                    </b-option>
                                </BFormSelect>
                        </ListGroupItem>
                        <CardHeader class="text-center">年度</CardHeader>
                <ListGroupItem>
                    <BFormSelect
                    margin="x-auto"
                    relative-width="25"
                    class="text-center">
                        <b-option selected>
                        2023
                        </b-option>
                        <b-option value="1">
                        2022
                        </b-option>
                        <b-option value="2">
                        2021
                        </b-option>
                        <b-option value="3">
                        2020
                        </b-option>
                    </BFormSelect>
                    <BFormCheck inline>
                        <BFormCheckInput value="option4" />
                        <BFormCheckLabel>4月</BFormCheckLabel>
                    </BFormCheck>
                    <BFormCheck inline>
                        <BFormCheckInput value="option5" />
                        <BFormCheckLabel>5月</BFormCheckLabel>
                    </BFormCheck>
                    <BFormCheck inline>
                        <BFormCheckInput value="option6" />
                        <BFormCheckLabel>6月</BFormCheckLabel>
                    </BFormCheck>
                    <BFormCheck inline>
                        <BFormCheckInput value="option7" />
                        <BFormCheckLabel>7月</BFormCheckLabel>
                    </BFormCheck>
                    <BFormCheck inline>
                        <BFormCheckInput value="option8" />
                        <BFormCheckLabel>8月</BFormCheckLabel>
                    </BFormCheck>
                    <BFormCheck inline>
                        <BFormCheckInput value="option9" />
                        <BFormCheckLabel>9月</BFormCheckLabel>
                    </BFormCheck>
                    <BFormCheck inline>
                        <BFormCheckInput value="option10" />
                        <BFormCheckLabel>10月</BFormCheckLabel>
                    </BFormCheck>
                    <BFormCheck inline>
                        <BFormCheckInput value="option11" />
                        <BFormCheckLabel>11月</BFormCheckLabel>
                    </BFormCheck>
                    <BFormCheck inline>
                        <BFormCheckInput value="option12" />
                        <BFormCheckLabel>12月</BFormCheckLabel>
                    </BFormCheck>
                    <BFormCheck inline>
                        <BFormCheckInput value="option1" />
                        <BFormCheckLabel>1月</BFormCheckLabel>
                    </BFormCheck>
                    <BFormCheck inline>
                        <BFormCheckInput value="option2" />
                        <BFormCheckLabel>2月</BFormCheckLabel>
                    </BFormCheck>
                    <BFormCheck inline>
                        <BFormCheckInput value="option3" />
                        <BFormCheckLabel>3月</BFormCheckLabel>
                    </BFormCheck>
                    <div class="text-center">
                    月の範囲指定する場合は、対象月をクリックして選択してください。
                    </div>
                </ListGroupItem>
                </ListGroup>
            </Card>
        </div>

</template>