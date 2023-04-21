let a = -3;

a > 0 ? console.log("양수") : console.log("음수");

let b = [];

b.length === 0 ? console.log("빈 배열") : console.log("안 빔");

let c = [12, 34, 65];

const arrayStatus = c.length === 0 ? "빈 배열" : "안 빈 배열";
console.log(arrayStatus);

let d;

const result = d ? true : false;
console.log(result);

let e = [];

const result2 = c ? true : false;
console.log(result2); 

// 1000 : 학점 계산 프로그램
// 90점 이상 A+
// 50점 이상 B+
// 둘다 아니면 F

let score = 40;

const scoreStudent = score >= 90 ? "A+" : score >= 50 ? "B+" : "F";
console.log(scoreStudent);

// 중첩 삼항 연산자는 가독성이 떨어지게 되므로 if 연산자를 사용하는게 더 좋다.

if (score >= 90) {
    console.log("A+");
} else if (score >= 50) {
    console.log("B+");
} else {
    console.log("F");
}