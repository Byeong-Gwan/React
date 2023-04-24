function hello() {
    return "hello";
}

async function helloAsync() {
    return "hello Async";
}

console.log(hello()); // hello
console.log(helloAsync()); // Promise { 'hello Async' }

helloAsync().then((res) => {
    console.log(res);
});