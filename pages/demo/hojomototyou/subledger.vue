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
            <CardHeader class="text-center">部門</CardHeader>
                <ListGroupItem>
                        <BFormSelect
                        margin="x-auto"
                        relative-width="25"
                        class="text-center">
                            <b-option selected>
                            指定なし
                            </b-option>
                        </BFormSelect>
                </ListGroupItem>
            <CardHeader class="text-center">勘定科目</CardHeader>
                <ListGroupItem>
                        <BFormSelect
                        margin="x-auto"
                        relative-width="25"
                        class="text-center">
                            <b-option selected>
                            鑑定科目
                            </b-option>
                        </BFormSelect>
                </ListGroupItem>
            <CardHeader class="text-center">補助科目</CardHeader>
                <ListGroupItem>
                        <BFormSelect
                        margin="x-auto"
                        relative-width="25"
                        class="text-center">
                            <b-option selected>
                            補助科目
                            </b-option>
                        </BFormSelect>
                        <div>から</div>
                        <BFormSelect
                        margin="x-auto"
                        relative-width="25"
                        class="text-center">
                            <b-option selected>
                            補助科目
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
            <CardHeader class="text-center">計上書類</CardHeader>
                <ListGroupItem>
                    <BFormCheck>
                        <BFormCheckInput
                        type="radio"
                        name="flexRadioDefault"
                        />
                        <BFormCheckLabel>全件</BFormCheckLabel>
                    </BFormCheck>
                    <BFormCheck>
                        <BFormCheckInput
                        type="radio"
                        name="flexRadioDefault"
                        checked
                        />
                        <BFormCheckLabel>月次仕訳</BFormCheckLabel>
                    </BFormCheck>
                    <BFormCheck>
                        <BFormCheckInput
                        type="radio"
                        name="flexRadioDefault"
                        />
                        <BFormCheckLabel>再振替・決算仕訳</BFormCheckLabel>
                    </BFormCheck>
                </ListGroupItem>
            <CardHeader class="text-center">消費税</CardHeader>
                    <ListGroupItem>
                        <BFormCheck>
                            <BFormCheckInput
                            type="radio"
                            name="flexRadioDefault1"
                            checked
                            />
                            <BFormCheckLabel>税抜集計</BFormCheckLabel>
                        </BFormCheck>
                        <BFormCheck>
                            <BFormCheckInput
                            type="radio"
                            name="flexRadioDefault1"
                            />
                            <BFormCheckLabel>税込集計</BFormCheckLabel>
                        </BFormCheck>
                    </ListGroupItem>
            <CardHeader class="text-center">PDF・CSV出力条件</CardHeader>
                    <ListGroupItem>
                        <BFormCheck>
                            <BFormCheckInput />
                                <BFormCheckLabel>月毎改ページ
                                <b-button
                                button="secondary"
                                toggle="collapse"
                                target="#collapseExample"
                                >
                                ?
                                </b-button>
                            </BFormCheckLabel>
                            </BFormCheck>
                            <Collapse id="collapseExample">
                                <Card>
                                <CardBody
                                text-background="secondary-subtle"
                                >
                                PDF出力時のみ有効です
                                </CardBody>
                                </Card>
                            </Collapse>
                        <BFormCheck>
                            <BFormCheckInput checked />
                                <BFormCheckLabel>仕訳がある科目のみ出力</BFormCheckLabel>
                        </BFormCheck>
                    </ListGroupItem>
                </ListGroup>
            </Card>
            <div class="text-center pt-4">
            <b-button
            button="outline-dark"
            size="lg"
            type="button"
            relative-width="25"
            shadow
            padding="3"
            margin="b-5"
            class="p-3"
            >
            表示
            </b-button>
            </div>
            <div class="text-center">
            <b-button button="outline-secondary">
            PDF出力
            </b-button>
            <b-button button="outline-secondary">
            CSV出力
            </b-button>
            </div>
    </div>
    </template>