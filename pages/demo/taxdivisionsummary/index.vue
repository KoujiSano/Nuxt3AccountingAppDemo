<template>
    <Container>
      <CardGroup>
        <Card style="width:auto">
          <CardHeader>会計単位</CardHeader>
            <ListGroup flush>
              <ListGroupItem>
                <BFormSelect aria-label="Default select example">
                  <b-option selected>
                    本社
                  </b-option>
                  <b-option value="1">
                    仮１
                  </b-option>
                  <b-option value="2">
                    仮２
                  </b-option>
                  <b-option value="3">
                    仮３
                  </b-option>
                </BFormSelect>
              </ListGroupItem>
          </ListGroup>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card style="width:auto">
          <CardHeader>年度</CardHeader>
          <ListGroup class="m-2">
                <BFormSelect aria-label="Default select example">
                  <b-option selected>
                    2023
                  </b-option>
                  <b-option value="1">
                    20xx
                  </b-option>
                  <b-option value="2">
                    20xx
                  </b-option>
                  <b-option value="3">
                    20xx
                  </b-option>
                </BFormSelect>
                <ListGroupItem class="text-center">
                  <ButtonGroup aria-label="Basic checkbox toggle button group" size="sm">
                    <CheckboxToggleButton button="outline-primary">
                    1月
                  </CheckboxToggleButton>
                  <CheckboxToggleButton button="outline-primary">
                    2月
                  </CheckboxToggleButton>
                  <CheckboxToggleButton button="outline-primary">
                    3月
                  </CheckboxToggleButton>
                  <CheckboxToggleButton button="outline-primary">
                    4月
                  </CheckboxToggleButton>
                  <CheckboxToggleButton button="outline-primary">
                    5月
                  </CheckboxToggleButton>
                  <CheckboxToggleButton button="outline-primary">
                    6月
                  </CheckboxToggleButton>
                  <CheckboxToggleButton button="outline-primary">
                    7月
                  </CheckboxToggleButton>
                  <CheckboxToggleButton button="outline-primary">
                    8月
                  </CheckboxToggleButton>
                  <CheckboxToggleButton button="outline-primary">
                    9月
                  </CheckboxToggleButton>
                  <CheckboxToggleButton button="outline-primary">
                    10月
                  </CheckboxToggleButton>
                  <CheckboxToggleButton button="outline-primary">
                    11月
                  </CheckboxToggleButton>
                  <CheckboxToggleButton button="outline-primary">
                    12月
                  </CheckboxToggleButton>
                </ButtonGroup>
              </ListGroupItem>
          </ListGroup>
        </Card>
      </CardGroup>
      <Card class="mb-3 mt-3">
      <b-button button="primary" size="lg">
        表示
      </b-button>
    </Card>
    </Container>
  </template>
