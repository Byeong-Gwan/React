const arr = [
    { color: "red" },
    { color: "black" },
    { color: "blue" },
    { color: "green" }
];

let number = 3;

console.log(
    arr.findIndex((elm) => {
        return elm.color === "green";
    })
);