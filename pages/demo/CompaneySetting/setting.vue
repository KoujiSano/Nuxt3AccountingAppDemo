<template>
    <div>
      <div class="form-group">
        <label for="gender">性別を選択してください</label>
        <div class="form-check">
          <input type="radio" class="form-check-input" id="male" name="gender" value="male" v-model="selectedGender">
          <label class="form-check-label" for="male">男性</label>
        </div>
        <div class="form-check">
          <input type="radio" class="form-check-input" id="female" name="gender" value="female" v-model="selectedGender">
          <label class="form-check-label" for="female">女性</label>
        </div>
        <div class="form-check">
          <input type="radio" class="form-check-input" id="other" name="gender" value="other" v-model="selectedGender">
          <label class="form-check-label" for="other">その他</label>
        </div>
      </div>
  
      <p>選択された性別: {{ selectedGender }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedGender: null
      };
    }
  };
  </script>
  
  <style>
  /* 必要に応じてスタイルを追加してください */
  </style>