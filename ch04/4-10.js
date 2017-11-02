/*

*/

// 함수 표현식으로 foo() 함수 생성
var foo = function(func) {
    func(); // 인자로 받은 func() 함수 호출
};

// foo() 함수 실행
foo(function() { //foo()함수 호출할때 : 함수 리터럴 방식으로 생성한 익명함수를 func인자로 넘김
    console.log('Function can be used as the argument.'); //func 매개변수로 인자에 넘겨진 함수를 호출할 수 있다
});

