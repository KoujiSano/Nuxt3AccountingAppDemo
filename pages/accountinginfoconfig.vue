<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        会計期間
      </div>
      <div class="card-body">
        <form>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">期首日</label>
            <div class="col-sm-10">
              <input type="date" class="form-control" id="inputEmail3">
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">決算期</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword3">
            </div>
          </div>
          <button type="submit" class="btn btn-primary">確認</button>
        </form>
      </div>
    </div>
  </div>
</template>
