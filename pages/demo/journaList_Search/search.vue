<template>
    <div class="container">
        <Card style="width: auto">
            <CardHeader>仕訳検索</CardHeader>
            <CardBody>
                <b-span class="input-group-text">会計単位</b-span>
                    <BFormSelect aria-label="Default select example">
                        <b-option selected>選択してください</b-option>
                        <b-option value="1">会社A</b-option>
                        <b-option value="2">会社B</b-option>
                        <b-option value="3">会社C</b-option>
                    </BFormSelect>
                <b-span class="input-group-text">対象仕訳番号</b-span>
                <input type="text" class="form-control" aria-label="jurnaNo">
                <div class="input-group mb-3">
                    <b-span class="input-group-text">対象日付範囲</b-span>
                    <input type="date" class="form-control" aria-label="date1">
                    <b-span class="input-group-text">～</b-span>
                    <input type="date" class="form-control" aria-label="date2">
                </div> 
                
                <b-table>
                    <b-thead>
                        <b-tr>
                            <b-th scope="col">
                            日付
                            </b-th>
                            <b-th scope="col">
                            仕訳番号
                            </b-th>
                            <b-th scope="col">
                            補助科目
                            </b-th>
                            <b-th scope="col">
                            相手科目
                            </b-th>
                        </b-tr>
                    </b-thead>
                </b-table>
            </CardBody>
        </Card>
    </div>
</template>
