/** ####################어려움*/
function HelloFunc(func) {
	this.greeting = "hello";
}

HelloFunc.prototype.call = function(func) {
	func ? func(this.greeting) : this.func(this.greeting);
}

var userFunc = function(greeting) {
	console.log(greeting);
}

var objHello = new HelloFunc();
objHello.func = userFunc;
objHello.call();

/*
1. 첫번째 인자: newObj 객체 -obj1
2. 두번째 인자: 사용자가 정의한 메서드 이름 : who
3. 세번째 인자: 사용자가 원하는 사람 이름 값: zzoon
4. 반환: 사용자가 정의한 newObj.prototype.who()함수를 반환하는 helloFunc()의 func 함수
*/
function saySomething(obj, methodName, name) {
	return (function(greeting) {
		return obj[methodName](greeting, name);
	});
}

function newObj(obj, name) { //새로운 함수 선언 (obj: HelloFunc()의 객체, name: 사용자가 출력을 원하는 사람 이름)
	obj.func = saySomething(this, "who", (name || "everyone"));

	return obj;
}

newObj.prototype.who = function(greeting, name) {
	console.log(greeting + " "  +  (name || "everyone") );
}

var obj1 = new newObj(objHello, "zzoon");
obj1.call();


