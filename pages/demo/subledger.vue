<template>
<div class="container">


    <Card style="width: auto height: auto">
        <CardHeader class="text-center">会計単位</CardHeader>
            <ListGroup flush class="text-center">
                <ListGroupItem>
                    <Dropdown>
                        <DropdownToggle button="light">
                        本社
                        </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem href="#">本社</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                </ListGroupItem>
        <CardHeader class="text-center">部門</CardHeader>
            <ListGroupItem>
                    <Dropdown>
                        <DropdownToggle button="light">
                        指定なし
                        </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem href="#">指定なし</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
            </ListGroupItem>
        <CardHeader class="text-center">鑑定科目</CardHeader>
                <ListGroupItem>A third item</ListGroupItem>
        <CardHeader class="text-center">補助科目</CardHeader>
                <ListGroupItem>An item</ListGroupItem>
        <CardHeader class="text-center">年度</CardHeader>
                <ListGroupItem>A second item</ListGroupItem>
        <CardHeader class="text-center">計上書類</CardHeader>
                <ListGroupItem>A third item</ListGroupItem>
        <CardHeader class="text-center">消費税</CardHeader>
                <ListGroupItem>An item</ListGroupItem>
        <CardHeader class="text-center">PDF・CSV出力条件</CardHeader>
                <ListGroupItem>A second item</ListGroupItem>
            </ListGroup>
        </Card>

</div>
</template>