/*

프로토타입 객체 메서드 -> 프로토타입 메서드.

프로토타입 메서드 내부에서 this를 사용한다면 어디에 바인딩될까?
= 그 메서드를 호출한 객체에 바인딩.

*/

// Person() 생성자 함수
function Person(name) {
    this.name = name;
}

// getName() 프로토타입 메서드
Person.prototype.getName = function () {
    return this.name;
};

// foo 객체 생성
var foo = new Person('foo');

//프로토타입 체이닝 발생
console.log(foo.getName()); // foo (this: foo가 바인딩된다.)

//Person.prototype 객체에 name 프로퍼티 동적 추가
Person.prototype.name = 'person'; //프로퍼티를 동적으로 추가하고 'person'을 저장

//바로 Person.prototype 객체에 접근해서 메서드 호출.
// getName() 메서드를 호출한 객체는? Person.prototype이다.
// 그러므로 this도 여기에 바인딩된다!
console.log(Person.prototype.getName()); // person
