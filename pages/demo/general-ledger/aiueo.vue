<template>
    <card>
    <BFormCheck inline>
      <BFormCheckInput value="option1" />
      <BFormCheckLabel>補助科目毎に出力</BFormCheckLabel>
    </BFormCheck>
    <BFormCheck inline>
      <BFormCheckInput value="option2" />
      <BFormCheckLabel>月毎改ページ</BFormCheckLabel>
    </BFormCheck>
    <BFormCheck inline>
      <BFormCheckInput
        value="option3"
        disabled
      />
      <BFormCheckLabel>3 (disabled)</BFormCheckLabel>
    </BFormCheck>
    <BFormCheck inline>
      <BFormCheckInput
        type="radio"
        name="inlineRadioOptions"
        value="option1"
      />
      <BFormCheckLabel>1</BFormCheckLabel>
    </BFormCheck>
    <BFormCheck inline>
      <BFormCheckInput
        type="radio"
        name="inlineRadioOptions"
        value="option2"
      />
      <BFormCheckLabel>2</BFormCheckLabel>
    </BFormCheck>
    <BFormCheck inline>
      <BFormCheckInput
        type="radio"
        name="inlineRadioOptions"
        value="option3"
        disabled
      />
      <BFormCheckLabel>3 (disabled)</BFormCheckLabel>
    </BFormCheck>
</card>
  </template>