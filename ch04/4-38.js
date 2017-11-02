/*

자바스크립트에서 객체는 자기 자신의 프로퍼티뿐만이 아니라, 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티 또한 마치 자신의 것처럼 접근이 가능하다. -> 프로토타입 체이닝

*/

var myObject = {
    name: 'foo',
    sayName: function () {
        console.log('My Name is ' + this.name);
    }
};

myObject.sayName(); //결과값이 제대로 출력됨
//myObject 객체의 [Prototype] 링크를 따라 그것의 부모역할을 하는 Object.prototype.
//Object.prototype 프로토타입 객체 내에 hasOwnProperty() 메서드가 있다.
console.log(myObject.hasOwnProperty('name')); //hasOwnProperty 메서드가 없음에도 정상적 실행
console.log(myObject.hasOwnProperty('nickName')); //myObject에는 nuckName 프로퍼티가 없음 - false
myObject.sayNickName(); //myObject의 메서드가 아니므로 오류발생

/*

프로토타입 체이닝이란?

= 특정 객체의 프로퍼티나 메서드에 접근하려고할때, 해당 객체에 접근하려는 프로퍼티 또는 메서드가 없다면
[Prototype] 링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티들 차례대로 검색하는 것

*/
