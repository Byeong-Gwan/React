// 동기적 방식
function taskA() {
    console.log("A 작업 끝");
}

taskA();
console.log("코드 끝");

// 비동기 함수 setTimeout() 함수 호출 
function taskA_01() {
    setTimeout(() => {
        console.log("A_01 task END");
    }, 2000);
}

taskA_01();
console.log("A_01 끝");

// 응용
function taskA_02(a, b, cb) {
    setTimeout(() => {
        const res = a + b;
        cb(res);
    }, 3000);
}

function taskB(a, cb) {
    setTimeout(() => {
        const res = a * 2;
        cb(res);
    }, 1000);
}

function taskC(a, cb) {
    setTimeout(() => {
        const res = a * -1;
        cb(res);
    }, 2000);
}

taskA_02(3, 4, (res) => {
    console.log("A TASK RESULT : ", res);
});

taskB(7, (res) => {
    console.log("B TASK RESULT : ", res);
});

taskC(14, (res) => {
    console.log("C TASK RESULT : ", res);
});

console.log("코드 끝");