<template>
    <div class="container p-4">
        <Card style="width: auto">
            <CardHeader class="text-center">会計単位</CardHeader>
                <ListGroup flush class="text-center">
                    <ListGroupItem>
                        <Dropdown>
                            <DropdownToggle button="light">
                            本社
                            </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="#">本社</DropdownItem>
                        </DropdownMenu>
                        </Dropdown>
                    </ListGroupItem>
            <CardHeader class="text-center">部門</CardHeader>
                <ListGroupItem>
                        <Dropdown>
                            <DropdownToggle button="light">
                            指定なし
                            </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="#">指定なし</DropdownItem>
                        </DropdownMenu>
                        </Dropdown>
                </ListGroupItem>
            <CardHeader class="text-center">鑑定科目</CardHeader>
                <ListGroupItem>
                        <Dropdown>
                            <DropdownToggle button="light">
                            鑑定科目
                            </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="#"></DropdownItem>
                        </DropdownMenu>
                        </Dropdown>
                </ListGroupItem>
            <CardHeader class="text-center">補助科目</CardHeader>
                <ListGroupItem>
                        <Dropdown>
                            <DropdownToggle button="light">
                            補助科目
                            </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="#"></DropdownItem>
                        </DropdownMenu>
                        </Dropdown>
                        <div>から</div>
                        <Dropdown>
                            <DropdownToggle button="light">
                            補助科目
                            </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="#"></DropdownItem>
                        </DropdownMenu>
                        </Dropdown>
                </ListGroupItem>
            <CardHeader class="text-center">年度</CardHeader>
                <ListGroupItem>
                    <Dropdown>
                        <DropdownToggle button="light">
                        2023
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="#">2023</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <BFormCheck inline>
                        <BFormCheckInput value="option4" />
                        <BFormCheckLabel>4月</BFormCheckLabel>
                    </BFormCheck>
                    <BFormCheck inline>
                        <BFormCheckInput value="option5" />
                        <BFormCheckLabel>5月</BFormCheckLabel>
                    </BFormCheck>
                    <BFormCheck inline>
                        <BFormCheckInput value="optio6" />
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
                                <BFormCheckLabel>月毎改ページ</BFormCheckLabel>
                            </BFormCheck>
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