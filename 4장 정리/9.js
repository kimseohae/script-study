// Person 생성자 함수
function Person(name) {
     this.name = name;
}
// foo 객체 생성
var foo = new Person('foo'); // ( 1 )
console.dir(Person); // ( 2 )
console.dir(foo); // ( 3 )