var factorialVar = function factorial(n) {
    if(n <= 1) {
        return 1;
    }
    return n * factorial(n-1);
};

console.log(factorialVar(3));  // 6
console.log(factorial(3)); // Uncaught ReferenceError: factorial is not defined 에러 발생

//factorial() : 함수 외부에서 해당 함수를 호출하지 못한다. -> 함수 내부에서 이뤄지는 재귀호출은 함수 이름으로 처리된다.

//factorialVar() : 외부에서 함수 호출이 가능하다.

//함수 표현식의 경우, 세미콜론(;)을 붙이는 것을 권장한다!
