function isPositive(number, resolve, reject) {
    setTimeout(() => {
        if (typeof number === 'number') {
            // 성공 -> resolve
            resolve(number >= 0 ? "양수" : "음수");
        } else {
            // 실패 -> reject
            reject("주어진 값이 숫자형 값이 아닙니다.");
        }
    }, 2000);
}

isPositive("안녕", (res) => {
    console.log("성공적으로 수행됨 : ", res);
}, (err) => {
    console.log("실패 하였음 : ", err);
});

function isPositiveP(number) {
    const executor = (resolve, reject) => { // 실행자
        setTimeout(() => {
            if (typeof number === 'number') {
                // 성공 -> resolve
                resolve(number >= 0 ? "양수" : "음수");
                console.log(number);
            } else {
                // 실패 -> reject
                reject("주어진 값이 숫자형 값이 아닙니다.");
            }
        }, 2000);
    };

    const asyncTask = new Promise(executor);
    return asyncTask;
}

const res = isPositiveP([]);

res
    .then((res) => {
        console.log("작업 성공 : ", res)
    })
    .catch((err) => {
        console.log("작업 실패 : ", err)
    });

/*============================================== */

function taskA(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a + b;
            resolve(res);
        }, 3000);
    })
}

function taskB(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * 2;
            resolve(res);
        }, 1000);
    })
}

function taskC(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * -1;
            resolve(res);
        }, 2000);
    })
}
// .then을 사용하여 아래처럼 콜백 지옥보다는 코드 중간에 또다른 코드를 추가하기 용의하며,
// 코드의 가독성이 좋다. 
taskA(5, 1)
    .then((a_res) => {
        console.log("A RESULT : ", a_res);
        return taskB(a_res);
    })
    .then((b_res) => {
        console.log("B RESULT : ", b_res);
        return taskC(b_res);
    })
    .then((c_res) => {
        console.log("C RESULT : ", c_res);
    });

    // 콜백 지옥 (콜백 헬)
// taskA(4, 5, (a_res) => {
//     console.log("A RESULT : ", a_res);
//     taskB(a_res, (b_res) => {
//         console.log("B RESULT : ", b_res);
//         taskC(b_res, (c_res) => {
//             console.log("C RESULT : ", c_res);
//         });
//     });
// });