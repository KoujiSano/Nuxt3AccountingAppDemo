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
                   <Col col="sm-6">
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
                   <Col col="sm-6">
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
    </div>
</template>