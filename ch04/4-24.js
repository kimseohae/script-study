//this는 전역 객체에 바인딩된다. (브라우저에서 자바스크립트를 실행하는 경우 전역객체:window 객체)
var foo = "I'm foo"; // 전역 변수 선언

console.log(foo); // I’m foo
//전역변수는 window의 프로퍼티로도 접근이 가능하다
console.log(window.foo); // I’m foo
