
// 1. 
function isKoreanFood(food) {
    if (food === "불고기" || food === "비빔밥" || food === "떡볶이") {
        return true;
    }
    return false;
}

const food1 = isKoreanFood("불고기");
const food2 = isKoreanFood("파스타");
console.log(food1);
console.log(food2);

// 1번 개선
function isKoreanFood2(food) {
    if ([ "불고기", "비빔밥", "떡볶이" ].includes(food)) {
        return true;
    }
    return false;
}

const food3 = isKoreanFood("불고기");
const food4 = isKoreanFood("파스타");
console.log(food3);
console.log(food4);

// 2.
const getMeal = (mealType) => {
    if (mealType === "한식") return "불고기";
    if (mealType === "양식") return "파스타";
    if (mealType === "중식") return "멘보샤";
    if (mealType === "일식") return "초밥";
    return "굶기";
};

console.log(getMeal("한식"));
console.log(getMeal("중식"));
console.log(getMeal());


// 2번 조건문 개선

const meal = {
    한식: "불고기",
    중식: "멘보샤",
    일식: "초밥",
    양식: "스테이크",
    인도식: "카레"
};

const getMeal2 = (mealType2) => {
    return meal[mealType2] || "굶기";
};

console.log(getMeal2("한식"));
console.log(getMeal2());
