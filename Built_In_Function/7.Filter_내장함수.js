const arr = [
    {num: 1, color: "red"},
    {num: 2, color: "black"},
    {num: 3, color: "blue"},
    {num: 4, color: "green"},
    {num: 5, color: "blue"},
];
// filter 내장함수를 사용하면 해당 요소 값이 중복되어도 모두 노출시킨다.
// 중복된 모든 값을 노출하기 위해서는 filter 내장함수를 사용하면 된다.
console.log(arr.filter((elm) => elm.color === "blue"));