/*

디폴트 프로토타입 객체는 함수가 생성될때 같이 생성되고, 함수의 prototype 프로퍼티에 연결된다.
자바스크립트에서는, 함수를 생성할때 해당 함수와 연결되는 디폴트 프로토타입 객체를 다른 일반 객체로
변경이 가능하다.

생성자 함수의 프로토타입이 변경되면, 변경된 시점 이후에 생성된 객체들은 변경된 프로토타입 객체로
[Prototype] 링크를 연결한다.

생성자 함수의 프로토타입이 변경되기 이전에 생성된 객체들은 기존 프로토타입 객체로의 [Prototype] 링크를
그대로 유지한다.

*/

// Person() 생성자 함수
// Person() 함수를 생성할때, 디폴트로 같이 생성되는 Person.prototype 객체는 자신과 연결된
// Person() 생성자 함수를 가리키는 constructor 프로퍼티만을 가진다.
function Person(name) {
    this.name = name;
}
console.log(Person.prototype.constructor); //생성자 함수를 가리킨다.

// foo 객체 생성
// foo 객체 - Person.prototype 객체를 자신의 프로토타입으로 연결한다.
var foo = new Person('foo');
//foo 객체에 없는 프로퍼티, 디폴트 프로토 타입 객체 Person.prototype에도
// 없는 프로퍼티 -> 프로토타입 체이닝이 일어나도, undefined 값 출력
console.log(foo.country);

// 디폴트 프로토타입 객체 변경
// 1. Person.prototype.constructor의 값은 어떤 값?
// 2. 변경한 프로토타입 객체는 country 프로퍼티가 있으므로, 디폴트 프로토타입 객체처럼 constructor 프로퍼티가 없다.
// 3. 프로토타입 체이닝이 발생
// 4. 변경한 프로토타입 객체는 객체 리터럴 방식으로 생성했으므로 Object.prototype을 [Prototype] 링크로 ㅇ녀결
// 5. Object.prototype 객체로 프로토타입 체이닝이 발생
// 6. Object.prototype 역시 Object() 생성자 함수와 연결된 빌트인 프로토타입 객체이다.
// 7. Object() 생성자 함수를 construtor 프로퍼티에 연결하고있다.
// 8. 결론적으로, Person.prototype.constructor 같은 Object() 생성자 함수가 출력된다.
Person.prototype = {
    country: 'korea' //객체를 변경
};
console.log(Person.prototype.constructor);

// bar 객체 생성
// 생성된 bar 객체는 새로 변경된 프로토타입 객체를 기리킨다.
// 따라서 새로 변경된 프로토타입 객체를 [Prototype] 링크로 가리키게된다.
var bar = new Person('bar');
//foo 객체는 디폴트 프로토타입 객체를, bar 객체는 새로 변경된 프로토타입 객체를 각각 [Prototype]링크를 가리킨다.
console.log(foo.country); //undefined
console.log(bar.country); //Korea
console.log(foo.constructor); //Person()
console.log(bar.constructor); //Object()


// 출력 결과
/*
function Person(name) {
    this.name = name;
}
undefined
function Object() { [native code] }
undefined
korea
function Person(name) {
    this.name = name;
}
function Object() { [native code] }
*/
