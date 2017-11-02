//자바스크립트 함수는 항상 리턴값을 반환한다.
//일반함수나 메서드는 리턴값을 지정하지 않을경우, undefined 값이 리턴된다.

// noReturnFunc() 함수 - 리턴문이 없음
var noReturnFunc = function () {
    console.log('This function has no return statement.');
};

var result = noReturnFunc(); //리턴값이 없는 함수 : undefined 값이 리턴됨
console.log(result);
