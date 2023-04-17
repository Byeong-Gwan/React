const arr = [
    { color: "red" },
    { color: "black" },
    { color: "blue" },
    { color: "green" }
];

let number = 3;

// find 내장함수를 사용하면, index를 호출하는게 아니라 요소를 노출 시킨다.
// 만약 배열의 index가 아니라 element를 알아야 된다면 find를 사용하면 된다.
// find를 사용하면, 모든 해당 값을 노출하는게 아니라 최초 만나는 값만 노출하고 return한다.
const element = arr.find((elm) => {
    return elm.color === "blue";
});

console.log(element);