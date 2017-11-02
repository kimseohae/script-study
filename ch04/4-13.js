// 1. 함수 객체의 length 프로퍼티 : 함수가 정상적으로 실행될때 기대되는 인자의 개수

function func0() {

}

function func1(x) {
    return x;
}

function func2(x, y) {
    return x + y;
}

function func3(x, y, z) {
    return x + y + z;
}

console.log('func0.length - ' + func0.length); // func0.length - 0
console.log('func1.length - ' + func1.length); // func1.length - 1
console.log('func2.length - ' + func2.length); // func2.length - 2
console.log('func3.length - ' + func3.length); // func3.length - 3

//2. length 프로퍼티 = 함수를 작성할때 정의한 인자 개수를 나타내고있음
