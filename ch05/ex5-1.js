/*
1. 콜 스택이란?
= 함수를 호출할때 해당 함수의 호출 정보가 차곡차곡 쌓여있는 스택을 의미한다.

2. 실행 컨텍스트란?
= 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념
= 실행 가능한 자바스크립트 코드 블록이 실행되는 환경(실행 가능한 블록 : 함수)
= 현재 실행되고있는 컨텍스트에서 이 컨텍스트와 관련없는 실행 코드가 실행되면, 새로운 컨텍스트가
생성되어 스택에 들어가고 제어권이 그 컨텍스트로 이동한다.
*/
console.log("This is global context"); //전역 실행 컨텍스트가 가장 먼저 실행 (1)

function ExContext1() {
	console.log("This is ExContext1"); //(2)
};

function ExContext2() {
	ExContext1(); //2. 호출
	console.log("This is ExContext2"); //(3)
};

ExContext2(); //1. 호출

