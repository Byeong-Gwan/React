let object = {
    one: "one",
    two: "two",
    three: "three"
};

let one = object.one;
let two = object.two;
let three = object.three;

console.log(one, two, three);

// 위 코드를 아래의 코드로 비 구조화 할당 방법으로 개선
let obj = {
    one2: "one2",
    two2: "two2",
    three2: "three2",
    name: "BK_GIM"
};

let {name: myName, one2, two2, three2, abc = "four"} = obj;
console.log(one2, two2, three2, myName, abc);