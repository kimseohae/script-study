/*

객체의 특정 프로퍼티를 읽으려고할때, 프로퍼티가 해당 객체에 없는 경우 프로토타입 체이닝이 발생한다.
객체에 있는 특정 프로퍼티에 값을 쓰려고할 경우 프로토타입 체이닝이 일어나지 않는다.

자바스크립트는 객체에 없는 프로퍼티 값을 쓰려고할 경우 동적으로 객체에 프로퍼티를 추가한다.

*/

// Person() 생성자 함수
function Person(name) {
    this.name = name;
}

Person.prototype.country = 'Korea';

var foo = new Person('foo');
var bar = new Person('bar');

//foo 객체에는 name 프로퍼티 밖에 없다.
//프로토타입 체이닝 발생 -> Person.prototype의 country 프로퍼티 값 출력
console.log(foo.country); //Korea
console.log(bar.country); //Korea

//foo.country 값에 값을 저장 - 프로토타입 체이닝 동작하지않음
//foo 객체에 country 프로퍼티 값이 동적으로 생성된다
foo.country = 'USA';

//foo.country : 프로토타입 체이닝 발생안함 -> 바로 'USA' 출력
console.log(foo.country);
//bar.country : 프로토타입 체이닝 발생 -> 'Korea' 출력
console.log(bar.country);
