<template>
    <div>
    <Container>
        <!--各種設定ボタン実装start-->
        <b-div flex padding="t-3" justify-content="center">
            <b-button button="outline-dark" margin="e-2" col="sm-3 xs-4 md-2">
                お気に入り設定
            </b-button>
            <b-button button="outline-dark" margin="e-2" col="sm-3 xs-4 md-2">
                編集
            </b-button>
            <b-button button="outline-dark" margin="e-2" col="sm-3 xs-4 md-2">
                新規科目追加
            </b-button>
            <b-button button="outline-dark" margin="e-2" col="sm-3 xs-4 md-2" disabled>
                新規補助科目追加
            </b-button>
            <b-button button="outline-dark" margin="e-2" col="sm-2 xs-2 md-2">
                <b-img src="https://api.iconify.design/uiw/file-pdf.svg" width="20px" height="20px" />
                PDF出力
            </b-button>
        </b-div>
        <!--各種設定ボタン実装end-->
        <!--Table切り替えボタンstart-->
        <b-div padding="t-3">
            <b-div v-if="activeTavle === 'table1'">
            <b-button button="outline-primary" active @click="switchTable('table1')" margin="e-2" col="sm-2">
                賃借対照表
            </b-button>
            <b-button button="outline-success"  @click="switchTable('table2')" col="sm-2">
                損益計算書
            </b-button>
            </b-div>
            <b-div v-if="activeTavle === 'table2'">
            <b-button button="outline-primary" @click="switchTable('table1')" margin="e-2" col="sm-2">
                賃借対照表
            </b-button>
            <b-button button="outline-success" active @click="switchTable('table2')" col="sm-2">
                損益計算書
            </b-button>
            </b-div>
        </b-div>
        <!--Table切り替えボタンend-->
        <!--賃借対照表start-->
        <b-div v-if="activeTavle === 'table1'">
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
        </b-div>
        <!--賃借対照表end-->
        <!--損益計算表start-->
        <b-div v-else-if="activeTavle === 'table2'">
            <b-table bordered>
                <b-thead>
                    <b-tr theme="success" text-alignment="center" text-wrap="nowrap">
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
                    <b-tr>
                        <b-td scope="row" text-alignment="center">
                            <b-a href="#">
                                変更
                            </b-a>
                        </b-td>
                        <b-td text-alignment="left">Cell</b-td>
                        <b-td text-alignment="left">Cell</b-td>
                        <b-td text-alignment="left">Cell</b-td>
                        <b-td text-alignment="left">Cell</b-td>
                        <b-td text-alignment="center">Cell</b-td>
                        <b-td text-alignment="center">Cell</b-td>
                        <b-td text-alignment="center">Cell</b-td>
                    </b-tr>
                </b-tbody>
            </b-table>
        </b-div>
        <!--損益計算表end-->
    </Container>
  </div>
</template>
<script>
export default{
    data(){
        return{
            activeTavle:'table1',
            items:[
                {code:"001",name:"aaa",kana:"bbb",roma:"ccc",rent:"ddd",subType:"eee",tax:"fff"},
            ],
        };
    },
    methods:{
        switchTable(table){
            this.activeTavle = table;
        }
    }
};

</script>