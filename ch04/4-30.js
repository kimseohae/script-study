//생성자 함수
function Person(name, age, gender, position) { //리턴값이 없음
    this.name = name;
    this.age = age;
    this.gender = gender;
}

//생성자 함수를 new 없이 호출 0 -> this는 함수 호출이므로 전역 객체인 window 객체로 바인딩
var qux = Person('qux', 20, 'man');
console.log(qux);  // 리턴값이 없으므로 undefined

console.log(window.name); // qux
console.log(window.age); // 20
console.log(window.gender); // man
