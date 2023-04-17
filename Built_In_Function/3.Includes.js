const arr = [1, 2, 3, 4, 5];

// 3. includse 내장 함수는 해당 배열 안에 원하는 값이 존재하는지
// 존재한다면 true로 존재하지 않으면 false로 반환

const number = 3;

// 이렇게 forEach 내장함수로 만들 수 있으나, 간결하게 나타내는 방법이 있다.
arr.forEach((elm) => {
    if (elm === number) {
        console.log(true);
    }
})

// 이렇게 includes 내장함수를 사용하면 코드를 간결하게 작성 가능
// includes 함수 : 주어진 배열에서 인자로 받은 값이 존재 하는지 여부 boolean 형식으로 출력
console.log(arr.includes(number));

