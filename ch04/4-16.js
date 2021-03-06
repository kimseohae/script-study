// 1. 즉시 실행함수: 함수를 정의함과 동시에 바로 실행하는 함수
// -> 최초 한번의 실행만을 필요로 하는 초기화 코드 등에 사용할 수 있다
(function (name) {
    console.log('This is the immediate function --> ' + name);
})('foo'); //('foo') 로 즉시 실행 함수를 호출 , foo : 인자


// 자바스크립트에서는 함수 유효범위를 지원한다.
/*

기본적으로, 자바스크립트는 변수를 선언할 경우 프로그램 전체에서 접근할 수 있는 전역유효범위를 가지게된다. 함수 내부에서 정의된 매개변수와 변수들은 함수 코드 내부에서만 유효하다(var문을 사용해서 선언된 변수).

따라서, 라이브러리 코드를 이렇게 즉시실행함수 내부에 정의해두게 되면 라이브러리 내의 변수물은 함수 외부에서 접근할 수 없다.
이렇게 즉시 실행 함수 내에 라이브러리 코드를 추가하면 전역 네임스페이스를 더럽히지않으므로, 이후 다른 자바스크립트 라이브러리들이 동시에 로드가 되더라도 라이브러리간 변수 이름 충돌같은 문제를 방지할 수 있다.


*/
