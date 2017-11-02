// 1. 함수는 다른 함수의 리턴 값으로도 활용할 수 있다.

// 함수를 리턴하는 foo() 함수 정의
var foo = function() {
    return function () {
        console.log('this function is the return value.')
    };
};

var bar = foo(); //foo()함수가 호출되면, 리턴값으로 전달되는 함수가 bar변수에 저장
bar(); //리턴된 함수를 실행하는 것이 가능
