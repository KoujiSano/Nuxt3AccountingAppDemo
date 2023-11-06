<template>
    <Container>
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
                <b-img src="" />
                pdf出力
            </b-button>
        </b-div>
        <b-div padding="t-3">
            <b-button button="outline-primary" margin="e-2" col="sm-2">
                賃借対照表
            </b-button>
            <b-button button="outline-primary" col="sm-2">
                損益計算書
            </b-button>
        </b-div>
        <b-div>
            <b-table bordered>
                <b-thead>
                    <b-tr theme="primary" text-alignment="center">
                        <b-th scope="col" col="xs-2 sm-1" text-alignment="center">

                        </b-th>
                        <b-th scope="col" col="xs-2 sm-1">
                        コード
                        </b-th>
                        <b-th scope="col" col="xs-6 sm-3" text-alignment="center">
                        名称
                        </b-th>
                        <b-th scope="col" col="sm-3" text-alignment="center">
                        カナ
                        </b-th>
                        <b-th scope="col" col="sm-1" text-alignment="center">
                        ローマ字
                        </b-th>
                        <b-th scope="col" col="xs-1 sm-1" text-alignment="center">
                        賃借
                        </b-th>
                        <b-th scope="col" col="xs-1 sm-1" text-alignment="center">
                        科目種類
                        </b-th>
                        <b-th scope="col" col="xs-1 sm-1" text-alignment="center">
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
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td text-alignment="center">Cell</b-td>
                        <b-td text-alignment="center">Cell</b-td>
                        <b-td text-alignment="center">Cell</b-td>
                    </b-tr>
                    <b-tr>
                        <b-td scope="row" text-alignment="center">
                            <b-a href="#">
                                変更
                            </b-a>
                        </b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td text-alignment="center">Cell</b-td>
                        <b-td text-alignment="center">Cell</b-td>
                        <b-td text-alignment="center">Cell</b-td>
                    </b-tr>
                    <b-tr>
                        <b-td scope="row" text-alignment="center">
                            <b-a href="#">
                                変更
                            </b-a>
                        </b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td text-alignment="center">Cell</b-td>
                        <b-td text-alignment="center">Cell</b-td>
                        <b-td text-alignment="center">Cell</b-td>
                    </b-tr>
                    <b-tr>
                        <b-td scope="row" text-alignment="center">
                            <b-a href="#">
                                変更
                            </b-a>
                        </b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td text-alignment="center">Cell</b-td>
                        <b-td text-alignment="center">Cell</b-td>
                        <b-td text-alignment="center">Cell</b-td>
                    </b-tr>
                </b-tbody>
            </b-table>
        </b-div>
    </Container>
</template>