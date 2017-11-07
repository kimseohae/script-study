/*
이 예제에서 HelloFunc()는 greeting만을 인자로 넣어 사용자가 인자로 넘긴 함수를 실행시킨다. 그래서 사용자가 정의한 함수도 한개의 인자를 받는 함수를 정의할 수 밖에 없다.
*/
function HelloFunc(func) {
	this.greeting = "hello"; //변수: greeting
}

HelloFunc.prototype.call = function(func) {
	func ? func(this.greeting) : this.func(this.greeting);
}

var userFunc = function(greeting) {//지역변수인 greeting만을 인자로 사용자가 정의한 함수로 넘김
	console.log(greeting);
}

var objHello = new HelloFunc();
objHello.func = userFunc;
objHello.call();

