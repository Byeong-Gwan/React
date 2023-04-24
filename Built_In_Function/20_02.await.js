function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
// await 함수는 async 함수 내에서만 사용가능하며 await 함수는 동기적으로 된다.
async function helloAsync() {
    await delay(3000);
    return "hello Await";
}

async function main() {
    const res = await helloAsync();
    console.log(res);
}

main();
