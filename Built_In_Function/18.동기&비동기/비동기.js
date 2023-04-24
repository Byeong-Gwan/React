function taskA(a, b, cb) {
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
// 콜백 함수가 가독성이 좋지 못하게 작성되어 있다.(콜백 지옥)
// 콜백 지옥을 개선하기 위해서 객체 Promise를 사용한다.
taskA(4, 5, (a_res) => {
    console.log("A RESULT : ", a_res);
    taskB(a_res, (b_res) => {
        console.log("B RESULT : ", b_res);
        taskC(b_res, (c_res) => {
            console.log("C RESULT : ", c_res);
        });
    });
});

console.log("코드 끝");