/*

arguments는 객체이지, 배열이 아니다. (배열 메서드를 사용할 수 없다)
-> 유사 배열 객체의 배열 메서드 사용 방법은?
: call과 apply 메서드를 이용한 명시적인 this 바인딩.

*/

// myObject 객체 생성
var myObject = {
    name: 'foo',
    sayName: function () {
        console.log(this.name); //this: 해당 메서드를 호출한 객체로 바인딩
    }
};

// ohterObject 객체 생성
var otherObject = {
    name: 'bar'
};

// otherObject.sayName() 메서드
otherObject.sayName = myObject.sayName;

// sayName() 메서드 호출
myObject.sayName();
otherObject.sayName(); //이때 위의 this는 otherObject의 name 'bar'을 가리킴
//this는 자신을 호출한 객체에 바인딩된다.
