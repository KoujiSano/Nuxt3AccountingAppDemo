export const userData = () => {
    return useState("userData",() => ({
        Fiscal_year_end: "第壱刻",
        Kubun: "第1四半期",
        Year: 1341,
    }))
}

export const publicData = () => {
    return useState("publicData",() => ({
        Name: "iri",
        CompanyName: "京都TECH",
        Address: " 京都府京都市下京区五条通猪熊西入柿本町 596 ",
        Address2: "",
        KessanKi: "上半期",
    }))
}