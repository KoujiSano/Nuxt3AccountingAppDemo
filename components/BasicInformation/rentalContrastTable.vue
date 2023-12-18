<template>
    <b-table bordered>
        <b-thead>
            <b-tr theme="primary" text-alignment="center" text-wrap="nowrap">
                <b-th scope="col" col="xs-2 sm-1">
                        
                </b-th>
                <b-th scope="col" col="xs-2 sm-1">
                コード
                </b-th>
                <b-th scope="col" col="xs-6 sm-3" >
                名称
                </b-th>
                <b-th scope="col" col="sm-3">
                カナ
                </b-th>
                <b-th scope="col" col="sm-1" >
                ローマ字
                </b-th>
                <b-th scope="col" col="xs-1 sm-1">
                賃借
                </b-th>
                <b-th scope="col" col="xs-1 sm-1">
                科目種類
                </b-th>
                <b-th scope="col" col="xs-1 sm-1">
                消費税
                </b-th>
            </b-tr>
        </b-thead>
        <b-tbody>
            <b-tr v-for="(item, index) in items" :key="index">
                <b-td scope="row" text-alignment="center">
                    <b-a href="#">
                        変更
                    </b-a>
                </b-td>
                <b-td text-alignment="left">{{ item.code }}</b-td>
                <b-td text-alignment="left">{{ item.name }}</b-td>
                <b-td text-alignment="left">{{ item.kana }}</b-td>
                <b-td text-alignment="left">{{ item.roma }}</b-td>
                <b-td text-alignment="center">{{ item.rent }}</b-td>
                <b-td text-alignment="center">{{item.subType}}</b-td>
                <b-td text-alignment="center">{{item.tax}}</b-td>
            </b-tr>
        </b-tbody>
    </b-table>
</template>
<script>
export default{
    data(){
        return{
            items:[
                {code:"001",name:"aaa",kana:"bbb",roma:"ccc",rent:"ddd",subType:"eee",tax:"fff"},
            ],
        };
    },
};
</script>