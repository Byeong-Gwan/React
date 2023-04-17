const arr = [
    {num: 1, color: "red"},
    {num: 2, color: "black"},
    {num: 3, color: "blue"},
    {num: 4, color: "green"},
    {num: 5, color: "blue"},
];
// slice(begin, And) 해당 내장함수는 ( )내에 아무값도 없으면, 아무런 변화가 없다.
// slice 내장함수는 begin부터 And-1까지 배열을 잘라준다.
console.log(arr.slice(0, 4));