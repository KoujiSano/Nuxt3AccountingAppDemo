
import type { NuxtLink } from '#build/components';
<template>
    <Card
    text-color="dark"
    background-color="info"
    margin="b-3"
    style="max-width: 100rem"
  >
    <CardHeader>スイート会計シリーズへ移行</CardHeader>
    <CardBody>     
         <CardText>
        円簿会計から株式会社フォーラムエイトが提供する「スイート会計シリーズ」へデータを移行することができます。<br>
        発行した移行コードはスイート会計シリーズにデータ移行するために必要になります。
        </CardText>
    </CardBody>
  </Card>
   <p>移行コードは発行されていません。</p>
   <p><b-a link="info">
    スイート会計シリーズ申し込みページ 
  </b-a>
   から申し込むことで移行コードが発行されます。</p>
</template>