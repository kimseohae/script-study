//Person() 생성자 함수
function Person(name){
    this.name = name;
}
console.log(Person.prototype.constructor);   // ( 1 )
//foo 객체 생성
var foo = new Person(‘foo’);
console.log(foo.country);  // ( 2 )
// 디폴트 프로토타입 객체 변경
Person.prototype = {
    Country : ‘korea’
};
console.log(Person.prototype.constructor);   // ( 3 )
// bar 객체 생성
var bar = new Person(‘bar’);
console.log(foo.country);
console.log(bar.country);
console.log(foo.constructor);
console.log(bar.constructor);