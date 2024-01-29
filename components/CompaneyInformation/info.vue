<template>
    <div class = "container">
       <Card margin="b-3">
           <CardHeader>会計期間</CardHeader>
           <CardBody>
               <Row>
                   <Col col="sm-6">
                        <div class="input-group mb-3">
                           <span class="input-group-text">期首日</span>
                           <input type="date" class="form-control" aria-label="date1">
                           <span class="input-group-text">決算期</span>
                           <input type="text" class="form-control" aria-label="jurnaNo">
                        </div>
                        <div class="input-group">
                        <tr>
                            <span class="input-group-text">仕訳番号のリセット</span>
                            <BFormCheck inline>
                                <input
                                class="form-check-input"
                                type="radio"
                                name="targetDateRange"
                                id="targetDateRange1"
                                checked
                                />
                            <label class="form-check-label" for="targetDateRange1">
                               リセットしない
                            </label>
                            </BFormCheck>
                            <BFormCheck inline>
                            <input
                             class="form-check-input"
                             type="radio"
                              name="targetDateRange"
                             id="targetDateRange2"
                             />
                             <label class="form-check-label" for="targetDateRange2">
                               年毎にリセット
                              </label>
                            </BFormCheck>
                            <BFormCheck inline>
                            <input
                             class="form-check-input"
                             type="radio"
                              name="targetDateRange"
                             id="targetDateRange3"
                             />
                             <label class="form-check-label" for="targetDateRange3">
                               月毎にリセット
                              </label>
                            </BFormCheck>
                            </tr>
                        </div>
                    </Col>
               </Row>
           </CardBody>
       </Card>
       <Card margin="b-3">
           <CardHeader>勘定科目体系</CardHeader>
           <CardBody>
               <Row>
                   <Col col="md-4">
                        <div class="input-group ">
                        <tr>
                            <span class="input-group-text">製造原価科目</span>
                            <BFormCheck inline>
                                <input
                                class="form-check-input"
                                type="radio"
                                name="targetDate"
                                id="targetDate1"
                                checked
                                />
                            <label class="form-check-label" for="targetDate1">
                               使用する
                            </label>
                            </BFormCheck>
                            <BFormCheck inline>
                            <input
                             class="form-check-input"
                             type="radio"
                              name="targetDate"
                             id="targetDate2"
                             />
                             <label class="form-check-label" for="targetDate2">
                               使用しない
                              </label>
                            </BFormCheck>
                             <span class="input-group-text">農業科目</span>
                            <BFormCheck inline>
                                <input
                                class="form-check-input"
                                type="radio"
                                name="Range"
                                id="Range1"
                                checked
                                />
                            <label class="form-check-label" for="Range1">
                               使用する
                            </label>
                            </BFormCheck>
                            <BFormCheck inline>
                            <input
                             class="form-check-input"
                             type="radio"
                              name="Range"
                             id="Range2"
                             />
                             <label class="form-check-label" for="Range2">
                               使用しない
                              </label>
                            </BFormCheck>
                            <span class="input-group-text">不動産科目</span>
                            <BFormCheck inline>
                                <input
                                class="form-check-input"
                                type="radio"
                                name="target"
                                id="target1"
                                checked
                                />
                            <label class="form-check-label" for="target1">
                               使用する
                            </label>
                            </BFormCheck>
                            <BFormCheck inline>
                            <input
                             class="form-check-input"
                             type="radio"
                              name="target"
                             id="target2"
                             />
                             <label class="form-check-label" for="target2">
                               使用しない
                              </label>
                            </BFormCheck>
                            <span class="input-group-text">建設業科目</span>
                            <BFormCheck inline>
                                <input
                                class="form-check-input"
                                type="radio"
                                name="Date"
                                id="Date1"
                                checked
                                />
                            <label class="form-check-label" for="Date1">
                               使用する
                            </label>
                            </BFormCheck>
                            <BFormCheck inline>
                            <input
                             class="form-check-input"
                             type="radio"
                              name="Date"
                             id="Date2"
                             />
                             <label class="form-check-label" for="Date2">
                               使用しない
                              </label>
                            </BFormCheck>
                            </tr>
                        </div>
                    </Col>
               </Row>
           </CardBody>
       </Card>
       <Card margin="b-3">
           <CardHeader>消費税情報</CardHeader>
           <CardBody>
               <Row>
                   <Col col="md-4">
                        <div class="input-group ">
                        <tr>
                            <span class="input-group-text">業者区分</span>
                            <BFormCheck inline>
                                <input
                                class="form-check-input"
                                type="radio"
                                name="tax"
                                id="tax1"
                                checked
                                />
                            <label class="form-check-label" for="tax1">
                               課税
                            </label>
                            </BFormCheck>
                            <BFormCheck inline>
                            <input
                             class="form-check-input"
                             type="radio"
                              name="tax"
                             id="tax2"
                             />
                             <label class="form-check-label" for="tax2">
                               免税
                              </label>
                            </BFormCheck>
                             <span class="input-group-text">経理処理方式</span>
                            <BFormCheck inline>
                                <input
                                class="form-check-input"
                                type="radio"
                                name="t"
                                id="t1"
                                checked
                                />
                            <label class="form-check-label" for="t1">
                               税抜処理
                            </label>
                            </BFormCheck>
                            <BFormCheck inline>
                            <input
                             class="form-check-input"
                             type="radio"
                              name="t"
                             id="t2"
                             />
                             <label class="form-check-label" for="t2">
                               税込処理
                              </label>
                            </BFormCheck>
                            <span class="input-group-text">課税方式</span>
                            <BFormCheck inline>
                                <input
                                class="form-check-input"
                                type="radio"
                                name="way"
                                id="way1"
                                checked
                                />
                            <label class="form-check-label" for="way1">
                               原則課税
                            </label>
                            </BFormCheck>
                            <BFormCheck inline>
                            <input
                             class="form-check-input"
                             type="radio"
                              name="way"
                             id="way2"
                             />
                             <label class="form-check-label" for="way2">
                               簡易課税
                              </label>
                            </BFormCheck>
                            <span class="input-group-text">端数処理（売上）</span>
                            <BFormCheck inline>
                                <input
                                class="form-check-input"
                                type="radio"
                                name="selling"
                                id="selling1"
                                checked
                                />
                            <label class="form-check-label" for="selling1">
                               切り捨て
                            </label>
                            </BFormCheck>
                            <BFormCheck inline>
                            <input
                             class="form-check-input"
                             type="radio"
                              name="selling"
                             id="selling2"
                             />
                             <label class="form-check-label" for="selling2">
                               四捨五入
                              </label>
                            </BFormCheck>
                            <BFormCheck inline>
                                <input
                                class="form-check-input"
                                type="radio"
                                name="selling"
                                id="selling３"
                                checked
                                />
                            <label class="form-check-label" for="selling3">
                               切り上げ
                            </label>
                            </BFormCheck>
                            <span class="input-group-text">端数処理（仕入）</span>
                            <BFormCheck inline>
                                <input
                                class="form-check-input"
                                type="radio"
                                name="purchase"
                                id="purchase2"
                                checked
                                />
                            <label class="form-check-label" for="purchase2">
                               切り捨て
                            </label>
                            </BFormCheck>
                            <BFormCheck inline>
                            <input
                             class="form-check-input"
                             type="radio"
                              name="purchase"
                             id="purchase3"
                             />
                             <label class="form-check-label" for="purchase2">
                               四捨五入
                              </label>
                            </BFormCheck>
                            <BFormCheck inline>
                                <input
                                class="form-check-input"
                                type="radio"
                                name="purchase"
                                id="purchase３"
                                checked
                                />
                            <label class="form-check-label" for="purchase3">
                               切り上げ
                            </label>
                            </BFormCheck>
                            </tr>
                        </div>
                    </Col>
               </Row>
           </CardBody>
       </Card>
       <Card margin="b-3">
           <CardHeader>決算</CardHeader>
           <CardBody>
               <Row>
                   <Col col="sm-6">
                        <div class="input-group">
                        <tr>
                            <span class="input-group-text">決算区分</span>
                            <BFormCheck inline>
                                <input
                                class="form-check-input"
                                type="radio"
                                name="result"
                                id="result1"
                                checked
                                />
                            <label class="form-check-label" for="result1">
                               中間決算と期末決算
                            </label>
                            </BFormCheck>
                            <BFormCheck inline>
                            <input
                             class="form-check-input"
                             type="radio"
                              name="result"
                             id="result2"
                             />
                             <label class="form-check-label" for="result2">
                               四半期決算
                              </label>
                            </BFormCheck>
                            </tr>
                        </div>
                    </Col>
               </Row>
           </CardBody>
       </Card>
       <b-button
    button="primary"
    @click="clicked"
  >
    確認
  </b-button>
    </div>
</template>