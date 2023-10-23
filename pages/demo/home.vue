<template>
  <div class="container">
        <Accordion class="pb-4">
          <AccordionItem active>
            <AccordionHeader level="2">
              <AccordionButton>各種入力</AccordionButton>
            </AccordionHeader>
            <AccordionCollapse>
              <AccordionBody>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><NuxtLink to="/multientry" class="card-link">複合仕訳入力</NuxtLink></li>
                </ul>
              </AccordionBody>
            </AccordionCollapse>
          </AccordionItem>
        </Accordion>
        <Accordion class="pb-4">
        <AccordionItem active>
          <AccordionHeader level="2">
            <AccordionButton>各種出力</AccordionButton>
          </AccordionHeader>
          <AccordionCollapse>
            <AccordionBody>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><a href="#" class="card-link">仕訳帳</a></li>
                <li class="list-group-item"><a href="#" class="card-link">仕訳検索</a></li>
                <li class="list-group-item">
                <NuxtLink to="/accountledger" class="card-link">総勘定元帳</NuxtLink>
                </li>
                <li class="list-group-item"><NuxtLink to="./subledger" class="card-link">補助元帳</NuxtLink>
                </li>
              </ul>
            </AccordionBody>
          </AccordionCollapse>
        </AccordionItem>
      </Accordion>
        <Accordion class="pb-4">
        <AccordionItem active>
          <AccordionHeader level="2">
            <AccordionButton>年次決算</AccordionButton>
          </AccordionHeader>
          <AccordionCollapse>
            <AccordionBody>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><a href="#" class="card-link">決算報告書</a></li>
              </ul>
            </AccordionBody>
          </AccordionCollapse>
        </AccordionItem>
      </Accordion>
        <Accordion class="pb-5">
        <AccordionItem active>
          <AccordionHeader level="2">
            <AccordionButton>各種設定</AccordionButton>
          </AccordionHeader>
          <AccordionCollapse>
            <AccordionBody>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                <NuxtLink to="/accountinginfoconfig" class="card-link">会社基本設定</NuxtLink>
                </li>
                <li class="list-group-item">
                <NuxtLink to="/accountconfig" class="card-link">勘定科目</NuxtLink>
                </li>
              </ul>
            </AccordionBody>
          </AccordionCollapse>
        </AccordionItem>
      </Accordion>
  </div>
</template>
