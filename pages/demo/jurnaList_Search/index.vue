<template>
    <div>
        <h1>仕訳帳</h1>
        <div class="row">
        <div class="col-6">
            <div class="input-group mb-3">
            <span class="input-group-text">期間</span>
            <input type="date" class="form-control" v-model="startDate">
            <span class="input-group-text">～</span>
            <input type="date" class="form-control" v-model="endDate">
            </div>
        </div>
        <div class="col-6">
            <div class="input-group mb-3">
            <span class="input-group-text">科目</span>
            <select class="form-select" v-model="account">
                <option value="">選択してください</option>
                <option v-for="account in accounts" :value="account.id">{{ account.name }}</option>
            </select>
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