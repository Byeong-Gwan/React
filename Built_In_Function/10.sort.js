let chars = ['나', '다', '가'];

// sort 내장함수는 해당 배열의 값들을 정렬하는 함수이다.
// 정렬된 배열을 반환하는게 아니라 원본 배열을 정렬해서 반환한다.
chars.sort();
console.log(chars);

// 만약 숫자를 정렬할 때 sort는 문자열 기준으로 정렬하기 때문에
// 사전 순으로 정렬이 된다. 
let number = [2, 4, 1, 8, 7, 0, 3, 6, 5];

// 그렇기 때문에 숫자를 정렬하기 위해서는 따로 함수를 만들어 사용해야된다.


const compare = (a, b) => {
    /*
        1. 같다.
        2. 크다.
        3. 작다.
    */
    if (a > b) {
        // 크다.
        return 1;
    }
    if (a < b) {
        // 작다.
        return -1;
    }

    // 같다.
    return 0;
};

number.sort(compare);
console.log(number);