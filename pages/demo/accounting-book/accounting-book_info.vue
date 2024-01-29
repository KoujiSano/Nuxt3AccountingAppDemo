<template>
    <b-table class="table table-bordered">
        <b-thead>
            <b-tr text-alignment="center">
                <b-th scope="col">
                    日付
                </b-th>
                <b-th scope="col">
                    仕訳番号
                </b-th>
                <b-th scope="col">
                    補助科目
                </b-th>
                <b-th scope="col">
                    相手科目
                </b-th>
                <b-th scope="col">
                    摘要
                </b-th>
                <b-th scope="col">
                    部門
                </b-th>
                <b-th scope="col">
                    消費税区分
                </b-th>
                <b-th scope="col">
                    借方
                </b-th>
                <b-th scope="col">
                    貸方
                </b-th>
                <b-th scope="col">
                    残高
                </b-th>
                <b-th scope="col">
                    付箋
                </b-th>
            </b-tr>
        </b-thead>
        <b-tbody>
            <b-tr theme="light">
                <b-th colspan="9">
                    繰越金額
                </b-th>
                <b-th class="text-end">
                    0
                </b-th>
                <b-td>&nbsp;</b-td>
                </b-tr>
                <b-tr>
                <b-th scope="row">
                    2023/04/01
                </b-th>
                <b-td colspan="2">0001</b-td>
                <b-td colspan="3">資本金</b-td>
                <b-td>対象外</b-td>
                <b-td class="text-end">1,000,000</b-td>
                <b-td>&nbsp;</b-td>
                <b-td class="text-end">1,000,000</b-td>
                <b-td>&nbsp;</b-td>
                </b-tr>
                <b-tr>
                <b-th scope="row">
                    2023/04/15
                </b-th>
                <b-td colspan="2">0002</b-td>
                <b-td colspan="3">商品</b-td>
                <b-td>対象外</b-td>
                <b-td>&nbsp;</b-td>
                <b-td class="text-end">1,000</b-td>
                <b-td class="text-end">999,000</b-td>
                <b-td>&nbsp;</b-td>
            </b-tr>
            <b-tr>
                <b-th scope="row">
                    2023/04/20
                </b-th>
                <b-td colspan="2">0003</b-td>
                <b-td colspan="3">諸口</b-td>
                <b-td>対象外</b-td>
                <b-td class="text-end">1,500</b-td>
                <b-td>&nbsp;</b-td>
                <b-td class="text-end">1,000,500</b-td>
                <b-td>&nbsp;</b-td>
                </b-tr>
                <b-tr theme="secondary">
                <b-th colspan="7">4月の合計</b-th>
                <b-th scope="row" class="text-end">1,001,500</b-th>
                <b-td class="text-end">1,000</b-td>
                <b-td>&nbsp;</b-td>
                <b-td>&nbsp;</b-td>
                </b-tr>
                <b-tr>
                <b-th scope="row">
                    2023/05/01
                </b-th>
                <b-td colspan="2">0004</b-td>
                <b-td colspan="3">商品</b-td>
                <b-td>対象外</b-td>
                <b-td>&nbsp;</b-td>
                <b-td class="text-end">1,000</b-td>
                <b-td class="text-end">999,500</b-td>
                <b-td>&nbsp;</b-td>
            </b-tr>
            <b-tr theme="secondary">
                <b-th colspan="7">5月の合計</b-th>
                <b-th scope="row" class="text-end">0</b-th>
                <b-td class="text-end">1,000</b-td>
                <b-td>&nbsp;</b-td>
                <b-td>&nbsp;</b-td>
                </b-tr>
                <b-tr>
                <b-th scope="row">
                    2023/06/05
                </b-th>
                <b-td colspan="2">0006</b-td>
                <b-td colspan="3">諸口</b-td>
                <b-td>対象外</b-td>
                <b-td class="text-end">1,400</b-td>
                <b-td>&nbsp;</b-td>
                <b-td class="text-end">1,000,900</b-td>
                <b-td>&nbsp;</b-td>
            </b-tr>
            <b-tr theme="secondary">
                <b-th colspan="7">6月の合計</b-th>
                <b-th scope="row" class="text-end">1,400</b-th>
                <b-td class="text-end">0</b-td>
                <b-td>&nbsp;</b-td>
                <b-td>&nbsp;</b-td>
                </b-tr>
                <b-tr>
                <b-th scope="row">
                    2023/07/01
                </b-th>
                <b-td colspan="2">0007</b-td>
                <b-td colspan="3">諸口</b-td>
                <b-td>対象外</b-td>
                <b-td class="text-end">5,000</b-td>
                <b-td>&nbsp;</b-td>
                <b-td class="text-end">1,005,900</b-td>
                <b-td>&nbsp;</b-td>
                </b-tr>
                <b-tr>
                <b-th scope="row">
                    2023/07/15
                </b-th>
                <b-td colspan="2">0008</b-td>
                <b-td colspan="3">商品</b-td>
                <b-td>対象外</b-td>
                <b-td>&nbsp;</b-td>
                <b-td class="text-end">4,000</b-td>
                <b-td class="text-end">1,001,900</b-td>
                <b-td>&nbsp;</b-td>
            </b-tr>
            <b-tr theme="secondary">
                <b-th colspan="7">7月の合計</b-th>
                <b-th scope="row" class="text-end">5,000</b-th>
                <b-td class="text-end">4,000</b-td>
                <b-td>&nbsp;</b-td>
                <b-td>&nbsp;</b-td>
                </b-tr>
                <b-tr>
                <b-th colspan="7">合計</b-th>
                <b-th scope="row" class="text-end">1,007,900</b-th>
                <b-td class="text-end">6,000</b-td>
                <b-td>&nbsp;</b-td>
                <b-td>&nbsp;</b-td>
                </b-tr>
        </b-tbody>
    </b-table>
</template>

