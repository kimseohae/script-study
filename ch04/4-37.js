/*

4.5) 프로토타입의 두가지 의미
1. 자바스크립트는 다른 프로토타입 기반의 객체지향 프로그래밍을 지원한다

2. 프로토타입이란?
= 자바스크립트에는 클래스 개념이 없고, 대신에 객체 리터럴이나 생성자 함수로 객체를 생성하는데 이렇게 생성된 객체의 부모객체를 말한다.

3. 암묵적 프로토타입 링크를 객체의 [Prototype]프로퍼티에 저장 -> [Prototype] 링크
= 자바스크립트의 모든 객체는 자신의 부모인 프로토타입 객체를 가리키는 참조링크 형태의 숨겨진 프로퍼티가 있다. 이러한 링크를 [Prototype] 프로퍼티에 저장한다.

4. 자바스크립트의 객체 생성 규칙
= 자바스크립트에서 모든 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 프로토타입 객체를 자신의 부모객체로 설정하는 [prototype] 링크로 연결한다.

*/

// Person() 생성자 함수로 prototype 프로퍼티로 자신과 링크된 프로토타입 객체를 가리킨다.

// Person() 생성자 함수로 생성된 foo 객체는 Person() 함수의 프로토타입 객체를 [Prototype] 링크로 연결한다.

//결국, prototype 프로퍼티나 [Prototype] 링크는 같은 프로토타입 객체를 가르키고있다.

//prototype 프로퍼티: 함수의 입장에서 자신의 링크된 프로토타입 객체를 가르킴
//[Prototype] 링크: 객체의 입장에서 자신의 부모 객체인 프로토타입 객체를 내부의 숨겨진 링크를 가리키고 있다.

//자바스크립트에서 객체를 생성하는건 생성자 함수의 역할
//생성된 객체의 실제 부모역할을 하는건 생성자 자신이 아닌 생성자의 prototype 프로퍼티가 가리키는 프로토타입 객체

function Person(name) {
    this.name = name;
}

// foo 객체 생성
var foo = new Person('foo'); //Person() 생성자 함수를 이용해서 foo 객체를 생성했다.

// Person() 생성자 함수의 prototype 프로퍼티와 foo 객체의 [Prototype 프로퍼티]가 같은 프로토타입 객체를 가리키고 있다.
console.dir(Person);
console.dir(foo);

/*

_proto_프로퍼티는 모든 객체에 존재하는 숨겨진 프로퍼티로 객체 자신의 프로토타입 객체를 가리키는 참조 링크 정보다.

*/
