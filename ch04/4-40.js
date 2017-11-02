/*

자바스크립트에서 Object.prototype 객체는 프로토타입 체이닝의 종점이다.
객체 리터럴 방식, 생성자 함수를 이용한 방식이나 결국엔 Object.prototype에서 프로토타입 체이닝이 끝난다.

결과적으로,
객체 리터럴 방식이나 생성자 함수 방식에 상관없이 모든 자바스크립트 객체는 프로토타입 체이닝으로
Object.prototype 객체가 가진 프로퍼티와 메서드에 접근하고, 서로 공유가 가능하다는 것을 알 수 있다.

Object.prototype에 정의한 메서드 : 자바스크립트의 모든 객체의 표준 메서드.

*/


//String.prototype 객체에 testMethod() 메서드를 추가!!
//이 메서드는 일반 문자열 표준 메서드처럼, 모든 문자열에서 접근이 가능하다.
String.prototype.testMethod = function () {
    console.log('This is the String.prototype.testMethod()');
};

// str 문자열을 생성한 후,
var str = "this is test";
// 메소드 호출 -> 프로토타입 체이닝으로 String.prototype에 정의한 testMethod() 호출 가능
str.testMethod();

console.dir(String.prototype);

//String.prototype 또한 자신의 프로토타입이 있으며, 그것은 Object.prototype 이다.
