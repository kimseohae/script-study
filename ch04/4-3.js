/*

1. 익명함수란?
= 이름 없는 함수 형태
= 익명함수의 호출은 함수 변수에 함수 호출 연산자인 ()를 붙혀서 기술하는 것으로 가능

*/

var add = function sum(x, y) { //sum()함수를 정의하고, 이 함수를 add 함수 변수에 할당했다.
    return x + y;
};

console.log(add(3,4)); // 7
console.log(sum(3,4)); // Uncaught ReferenceError: sum is not defined 에러 발생

//에러발생 이유는? -> 함수 표현식에서 사용된 함수 이름이 외부 코드에서 접근이 불가능하다!
