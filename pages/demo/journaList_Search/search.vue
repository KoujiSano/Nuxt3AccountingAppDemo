<template>
    <div>
        <h1>仕訳検索</h1>
        <div class="row">
        <div class="col-6">
            <div class="input-group mb-3">
                <span class="input-group-text">会計単位</span>
                <select class="form-select" aria-label="accountingUnit">
                    <option selected>選択してください</option>
                    <option value="1">会社A</option>
                    <option value="2">会社B</option>
                    <option value="3">会社C</option>
                </select>
                <span class="input-group-text">対象仕訳番号</span>
                <input type="text" class="form-control" aria-label="jurnaNo">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">対象日付範囲</span>
                <input type="date" class="form-control" aria-label="date1">
                <span class="input-group-text">～</span>
                <input type="date" class="form-control" aria-label="date2">
            </div>
        </div>
        <div class="col-6">
            <div class="input-group mb-3">
            <span class="input-group-text">勘定科目</span>
            </div>
        </div>
        </div>
        <table class="table table-bordered">
            <thead>
                <tr class="table-primary text-center">
                    <th scope="col">日付</th>
                    <th scope="col">仕訳番号</th>
                    <th scope="col">補助科目</th>
                    <th scope="col">相手科目</th>
                </tr>
            </thead>
        </table>
    </div>
</template>