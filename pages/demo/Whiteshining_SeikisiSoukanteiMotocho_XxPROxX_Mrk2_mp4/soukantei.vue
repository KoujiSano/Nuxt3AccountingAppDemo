<template>
  <Container>
    <Row>
      <Col col="6 md-3">
        会計単位
      </Col>
      <Col col="6 md-3">
        <Dropdown>
        <DropdownToggle button="secondary">
          本社
        </DropdownToggle>
        <DropdownMenu>
        <DropdownItem>
          本社
        </DropdownItem>
        </DropdownMenu>
        </Dropdown>
      </Col>
      <Col col="6 md-3">
        部門
      </Col>
      <Col col="6 md-3">
        <Dropdown>
          <DropdownToggle button="secondary">
            指定なし
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem>
            指定なし
          </DropdownItem>
        </DropdownMenu>
        </Dropdown>
      </Col>
    </Row>
    <Row>
      <Col>
        勘定項目
      </Col>
      <Col>
        <Dropdown>
          <DropdownToggle button="secondary">
            100現金
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem>
            100現金
          </DropdownItem>
        </DropdownMenu>
        </Dropdown>
      </Col>
      <Col>
        <a>
          から
        </a>
      </Col>
      <Col>
        <Dropdown>
          <DropdownToggle button="secondary">
            100現金
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem>
            100現金
          </DropdownItem>
        </DropdownMenu>
        </Dropdown>
      </Col>
    </Row>
    <Row justify-content="start">
      <Col col="4">
        年度
      </Col>
      <Col col="6">
        <Dropdown  display="grid" gap="2">
          <DropdownToggle button="secondary">
          2023
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem>
            2023
          </DropdownItem>

          </DropdownMenu>
        </Dropdown>
      </Col>
    </Row>
  </Container>

</template>