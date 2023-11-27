export const yeardata = () => {
    return useState<number>('y', () => 3614)
  }
export const kubundata = () => {
    return useState<string>('k', () => "にゃにゃ～")
  }

export const userdata = () => {
    return useState('User', () => shallowRef({
        Fiscal_year_end: "第壱刻",
        CompanyName: "刹那月光",
        Address: "紅に染まりし森林の夢",
        Address2: "晴嵐-烈火街-",
        Kubun: "なーん..にゃん",
        Year: "1341",
    }))
}