<template>
  <Container>
      <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-header">各種入力</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><NuxtLink to="/demo/complex-journal/complex" class="card-link">複合仕訳入力</NuxtLink></li>
            <li class="list-group-item"><NuxtLink to="/demo/passbook" class="card-link">通帳入力</NuxtLink></li>
        </ul>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-header">各種出力</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><NuxtLink to="/demo/book-keeping-journal" class="card-link">仕訳帳</NuxtLink></li>
            <li class="list-group-item"><NuxtLink to="/demo/journaList_Search/search" class="card-link">仕訳検索</NuxtLink></li>
            <li class="list-group-item">
              <NuxtLink to="/demo/general-ledger" class="card-link">総勘定元帳</NuxtLink>
            </li>
            <li class="list-group-item"><NuxtLink to="/demo/hojomototyou/subledger" class="card-link">補助元帳</NuxtLink></li>
            <li class="list-group-item"><NuxtLink to="/demo/accounting-book/accounting-book" class="card-link">出納帳</NuxtLink></li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-header">年次決算</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><NuxtLink to="/demo/financial-statement/financial-statement" class="card-link">決算報告書</NuxtLink></li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-header">各種設定</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <NuxtLink to="/demo/companeyinformation/info" class="card-link">会社基本設定</NuxtLink>
            </li>
            <li class="list-group-item">
              <NuxtLink to="/demo/variousSettings/User" class="card-link">ユーザー情報</NuxtLink>
            </li>
            <li class="list-group-item">
              <NuxtLink to="/demo/BasicInformationSetting/AccountItem" class="card-link">勘定科目</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Container>
</template>
