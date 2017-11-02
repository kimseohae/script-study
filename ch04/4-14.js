/*

모든 함수는 객체로서 prototype 프로퍼티를 가지고있다.

<prototype 프로퍼티와 [Prototype] 프로퍼티의 차이점>
1. [Prototype] 프로퍼티: 객체 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가르킴
2. prototype 프로퍼티: 이 함수가 생성자로 사용될때 이 함수를 통해 생성된 객체의 부모 역할을 하는 프로토아입 객체를 가리킨다.

*/

// myFunction 함수 정의
// 1. 함수를 생성함 - 함수가 생성됨과 동시에 myFunction()함수의 prototype 프로퍼티에는 이 함수와 연결된 프로토타입 객체가 생성된다.
function myFunction() {
    return true;
}

//myFunction.prototype은 myFunction() 함수의 프로토타입 객체를 의미한다.
// (1)constructor 프로퍼티 + _proto_ 프로퍼티가 있다.
console.dir(myFunction.prototype);
//프로토타입 객체와 매핑된 함수를 알아볼 수 있다. 결과값: myFuction()함수를 가리킴
console.dir(myFunction.prototype.constructor);
