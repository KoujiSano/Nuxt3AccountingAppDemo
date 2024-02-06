<template>
    <b-div>
        <!--各種設定ボタン-->
        <BasicInformationSetting/>
        <!--各種設定ボタン-->
        <!--Table切り替えボタン-->
        <b-div padding="t-3">
            <b-div v-if="activeTable === 'table1'">
            <b-button button="outline-primary"  active @click="switchTable('table1')" margin="e-2" col="sm-2">
                賃借対照表
            </b-button>
            <b-button button="outline-success"  @click="switchTable('table2')" col="sm-2">
                損益計算書
            </b-button>
            </b-div>
            <b-div v-if="activeTable === 'table2'">
            <b-button button="outline-primary" @click="switchTable('table1')" margin="e-2" col="sm-2">
                賃借対照表
            </b-button>
            <b-button button="outline-success" active @click="switchTable('table2')" col="sm-2">
                損益計算書
            </b-button>
            </b-div>
        </b-div>
        <!--Table切り替えボタン-->
        <b-div v-if="activeTable === 'table1'">
            <!--賃借対照表-->
            <BasicInformationRentalContrastTable/>
        </b-div>
        <b-div v-else-if="activeTable === 'table2'">
            <!--損益計算表-->
            <BasicInformationProfitAndLoss/>
        </b-div>
  </b-div>
</template>
<script>
import { ref } from 'vue';

export default {
    setup() {
        const activeTable = ref('table1');

        const switchTable = (table) => {
            activeTable.value = table;
        };
        return {
            activeTable,
            switchTable,
        };
    },
};
</script>
