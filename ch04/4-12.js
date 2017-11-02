function add(x, y) {
    return x + y;
}

console.dir(add); //크롬 브라우저를 실행한 후, console.dir()문을 통해 결과확인

// 1. add() 함수는 arguments, caller, length 등과 같은 다양한 프로퍼티가 기본적으로 생성된다 -> 이러한 프로퍼티들이 함수를 생성할때 포함되는 표준 프로퍼티다.

// 2. 프로퍼티 종류
// -> name 프로퍼티: 함수의 이름
// -> caller 프로퍼티: 자신을 호출한 함수를 나타냄
// -> arguments 프로퍼티: 함수를 호출할때 전달된 인자값을 나타냄
// -> _photo_ 프로퍼티: [Prototype]라는 내부 프로퍼티와 같은 개념
// -> Function.prototype 객체 : 함수 객체의 부모 역할을 하는 프로토타입 객체 = Empty()
