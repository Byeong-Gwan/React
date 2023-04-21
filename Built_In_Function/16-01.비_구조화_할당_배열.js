let arr = ["one", "two", "three"];

let one = arr[0];
let two = arr[1];
let three = arr[2];

console.log(one, two, three);

// 비 구조화 할당으로 위 코드를 줄여 줄 수 있다.
let arr2 = ["O", "T", "TH"];
let [O, T, TH] = arr2;
console.log(O, T, TH);

// 배열의 선언 분리 비 구조화 할당 방법
let [TT, TR, TG, TS = 'four'] = ["one2", "two2", "three2"];
console.log(TT, TR, TG, TS);

// 스왑 활용
let a = 10;
let b = 20;
let tmp = 0;

console.log(a, b);

tmp = a;
a = b;
b = tmp;
console.log(a, b);

// 더 줄이는 방법
[a, b] = [b, a];
console.log(a, b);