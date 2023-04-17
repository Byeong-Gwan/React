const arr = [1, 2, 3, 4, 5];

// 2. Map 내장 함수를 사용해서 기존의 배열을 참고하여
// 어떠한 연산을 통해서 나온 결과 값을 새로운 배열에 넣기

const newArr = arr.map((elm) => {
    return elm * 2;
});

console.log(newArr);

