<template>
    <div class = "container">
       <Card>
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
                        <div class="input-group mb-3">
                            <span class="input-group-text">仕訳番号のリセット</span>
                            <div class="form-check">
                                <input type="radio">
                            </div>
                        </div>
                    </Col>
               </Row>
           </CardBody>
       </Card>
    </div>
</template>