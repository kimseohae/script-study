/*

함수가 생성될때, 자신의 prototype 프로퍼티에 연결되는 프로토타입 객체는,
디폴트로 constructor 프로퍼티만을 가진 객체다.

프로토타입 객체 = 자바스크립트 객체 -> 일반객체처럼 동적으로 프로퍼티 추가/삭제가 가능하다.
이렇게 변경된 프로퍼티는 실시간으로 프토토타입 체이닝에 반영된다.

*/

// Person() 생성자 함수
function Person(name) {
    this.name = name;
}

// foo 객체 생성
var foo = new Person('foo');

//foo.sayHello(); //foo에는 sayHello라는 메서드가 정의되어있지 않아서 에러가 발생한다.

// 프로토타입 객체에 sayHello() 메서드 정의
// 동적으로 메서드를 추가!!
Person.prototype.sayHello = function () {
    console.log('Hello');
}

// 1. foo 객체는 sayHello()가 없다
// 2. 프로토타입 체이닝 - Person.prototype 객체에서 sayHello()를 검색한다.
// 3. sayHello() 메서드가 정의되어있다. -> 정상적으로 출력한다.
foo.sayHello(); // Hello
