//Person() 생성자 함수
function Person(name){
     this.name = name;
}
//foo 객체 생성
var foo = new Person('foo');
//foo.sayHello();  // ( 1 )
//프로토타입 객체에 sayHello() 메서드 정의
Personprototype.sayHello = function() {      // ( 2 )
     console.log('Hello');
}
foo.sayHello(); // Hello; ( 3 )