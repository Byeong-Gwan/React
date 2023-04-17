
// 1. forEach 내장 함수를 통해서 for문을 사용하여 length(길이)만큼 배열을 호출하기와 같은 기능 구현
let arr = [1, 2, 3, 4, 5];

arr.forEach((elm) => console.log(elm));

console.log("= 내장 함수 사용 함수로 나타내도 같은 결과를 얻는다. =");

// 위 코드를 풀어 사용한다면 이렇게 표현 할 수 있다.
arr.forEach(function (elm) {
    console.log(elm);
})