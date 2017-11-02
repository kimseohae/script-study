// 생성자 함수
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

// foo 빈 객체 생성_객체 리터럴 방식으로 생성
var foo = {};

// apply() 메서드를 사용해서, Person()함수를 호출한 코드
Person.apply(foo, ['foo', 30, 'man']); //foo: Person() 함수에서 this로 바인딩
console.dir(foo);
