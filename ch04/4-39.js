/*

생성자 함수로 객체를 생성하는 경우는 객체 리터럴 방식과 약간 다른 프로토타입 체이닝이 이뤄진다.

- 자바스크립트에서 모든 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 개체를 자신의 프로토타입 객체(부모객체)로 취급한다.

*/

// Person 생성자 함수
function Person(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

// foo 객체 생성- foo객체의 프로토타입 객체는 Person.prototype이 된다.
var foo = new Person('foo', 30, 'tennis');

// 프로토타입 체이닝
// 1. foo 객체는 hasOwnProperty() 메서드가 없다.
// 2. 프로토타입 체이닝 - foo의 부모객체인 Person.prototype 객체에서 hasOwnProperty() 메서드를 찾는다.
// 3. 함수에 연결된 프로토타입 객체는 디폴트로 constructor 프로퍼티만을 가진다
// 4. 결과적으로 hasOwnProperty() 메서드는 없다.
console.log(foo.hasOwnProperty('name')); // true
// 하지만, 위에 결과는 true이다. 왜일까?
// Person.prototype 역시 자바스크립트 객체이므로, Object.prototype을 프로토타입 객체로 가진다.
// 따라서, 프로토타입 체이닝은 Object.prototype 객체로 계속 이어진다.
// 따라서 실행 : Object.prototype 객체의 hasOwnPeroperty() 메서드가 실행된다. -true 출력.

// Person.prototype 객체 출력 _ 결과: constructor 프로퍼티만 있다.
console.dir(Person.prototype);
