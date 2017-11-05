/*
함수는 유효 범위의 한 단위가 된다.
이 유효 범위를 나타내는 스코프가 [Scope] 프로퍼티로 각 함수 객체 내에서 연결 리스트 형식으로 관리된다.
=> 스코프 체인
*/

/*
스코프 체인
3   .....
2   변수 객체2
1   변수 객체1
0   변수 객체0

=> 각각의 함수는 [Scope] 프로퍼티로 자신이 생성된 실행 컨텍스트의 스코프 체인을 참조한다.
   함수가 실행되는 순간 실행 컨텍스트가 만들어진다.
   이 컨텍스트는 실행된 함수의 [Scope] 프로퍼티를 기반으로 새로운 스코프 체인을 만든다.
*/
var var1 = 1;
var var2 = 2;
console.log(var1);  // 1
console.log(var2);  // 2

/*
전역 실행 컨텍스트
    변수객체
    [Scope] ---------> 스코프 체인 : 0   전역객체
    var1
    var2
    this
*/
