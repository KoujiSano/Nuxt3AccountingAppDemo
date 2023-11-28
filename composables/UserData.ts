export const PublicUser = () => {
    return useState('User', () => shallowRef({
        Name: "ブラック黒之介",
        CompanyName: "漆黒かんぱに～",
        Address: "紅に染まりし森林の夢",
        Address2: "晴嵐-烈火街-",
    }))
}