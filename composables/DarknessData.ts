export const userdata = () => {
    return useState('KessanData', () => shallowRef({
        Fiscal_year_end: "第壱刻",
        Kubun: "なーん..にゃん",
        Year: "1341",
    }))
}

export const chuki = () => {
    return useState('ChukiData', () => shallowRef({
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