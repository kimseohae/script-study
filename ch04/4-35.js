//생성자 함수에서 리턴값을 지정하지 않을경우 생성된 객체가 리턴된다

// Person() 생성자 함수
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    // 명시적으로 다른 객체 반환
    return {name:'bar', age:20, gender:'woman'};
}

var foo = new Person('foo', 30, 'man'); //리턴값에서 명시적으로 넘긴 객체나 배열이 리턴된다
console.dir(foo);
