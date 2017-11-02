/*

- 함수 생성시, 함수 코드는 함수 객체의 내부 프로퍼티에 자동으로 저장된다
- 자바스크립트의 함수는 특정 기능의 코드를 수행하는 역할뿐만 아니라, 일반 객체처럼 자신의 프로퍼티를 가질 수 있는 특별한 객체라고 볼 수 있다.

*/

// 함수 선언 방식으로 add()함수 정의
function add(x, y) {
    return x+y;
}

// add() 함수 객체에 result, status 프로퍼티 추가
// add() 함수에 마치 일반 객체처럼 result 프로퍼티를 동적으로 생성하고, 여기에 add()함수를 호출한 결과를 저장한 것을 확인할 수 있다.
add.result = add(3, 2); //5가 result 프로퍼티에 저장된다
add.status = 'OK';

console.log(add.result); // 5
console.log(add.status); // 'OK'
