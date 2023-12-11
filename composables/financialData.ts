export const userData = () => {
    return useState("userData",() => ({
        Fiscal_year_end: "第壱刻",
        Kubun: "なーん..にゃん",
        Year: "1341",
    }))
}

export const annotationData = () => {
    return useState("annotationData",() => ({
        Keizoku:"にゃー", 
        Jyuyou:"にゃーん", 
        Tintai:"にゃおーん", 
        Soneki:"にゃおは立つな", 
        Kabunusi:"花", 
        Zeikouka:"鳥", 
        Risu:"風", 
        Kanren:"月", 
        Onekabu:"幻", 
        Gohatu:"想", 
        Sonota:"郷", 
    }))
}

export const pData = () => {
    return useState("publicData",() => ({
        Name: "ブラック黒之介",
        CompanyName: "漆黒かんぱに～",
        Address: "紅に染まりし森林の夢",
        Address2: "晴嵐-烈火街-",
        KessanKi: "幽玄の刻",
    }))
}