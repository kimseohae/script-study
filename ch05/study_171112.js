// 155~168
// innerFunc()은 outerFunc()의 실행이 끝난 후 실행된다.
// outerFunc 실행 컨텍스트는 사라졌지만 outFunc 변수 객체는 여전히 남아 있고
// innerFunc의 스코프 체인으로 참조된다. 이것이 클로저의 개념이다.
// 결국 이미 생명주기가 끝난 외부 함수의 변수를 참조하는 함수를 클로저라고 한다.

function outerFunc() {          // 참조되는 외부 변수
    var x = 10;                 // 자유변수
    var innerFunc = function(){ // x를 참조하는 innerFunc 클로저
        console.log(x);
    }
    return innerFunc;
    var inner = outerFunc();
    inner();
}
var new_func = outerFunc();
new_func();

// 함수를 일급 객체로 취급하는 언어에서 주요하게 사용되는 특성이다.


// 이해가 안되면 조금 더 자세하게 들어가보자
// 클로저는 독립적인 (자유) 변수를 가리키는 함수이다. 또는, 클로저 안에 정의된 함수는 만들어진 환경을 ‘기억한다’.
// 흔히 함수 내에서 함수를 정의하고 사용하면 클로저라고 한다. 하지만 대개는 정의한 함수를 리턴하고 사용은 바깥에서 하게된다.
function getClosure() {
  var text = 'variable 1';
  return function() {
    return text;
  };
}
var closure = getClosure();
console.log(closure()); // 'variable 1'

// getClosure()는 함수를 반환하고, 반환된 함수는 getClosure() 내부에서 선언된 변수를 참조하고 있다.
// 또한 이렇게 참조된 변수는 함수 실행이 끝났다고 해서 사라지지 않았고, 여전히 제대로 된 값을 반환하고 있는 걸 알 수 있다.

// 마지막으로 얘를 보고 넘어 가도록하자.
var base = 'Hello, ';
function sayHelloTo(name) {
  var text = base + name;
  return function() {
    console.log(text);
  };
}
var hello1 = sayHelloTo('min');
var hello2 = sayHelloTo('young');
var hello3 = sayHelloTo('s');
hello1();
hello2();
hello3();


// 예제 5-8 결과값 확인하기
// 변수 객체가 스코프 체인에 들어가게 되면서 이 스코프체인은 innerFunc스코프체인을 참조하게 된다.
// outerFunc() 함수가 종료되었지만 여전히 내부함수에 [[scope]]으로 참조되서 가비지 컬렉션에 들어가지 않는다.
// 그래서 결국 이후에 호출하더라도 innerFunc() 에서 변수 local에 접근 가능하다.
function outerFunc(arg1, arg2) {
    var local = 8;
    function innerFunc(innerArg) {
        console.log((arg1 + arg2)/(innerArg + local));
    }
    return innerFunc;
}
var exam1 = outerFunc(2,4);

exam1(2);
// 2+4 / 2+8


// 예제 5-9 특정 함수에 사용자가 정의한 객체의 메서드 연결하기
function HelloFunction(func) {  // greeting라는 변수가 있는 함수
    this.greeting = "hello";
}
// func 프로퍼티에 참조되는 함수를 call() 함수로 호출한다.
// func 프로퍼티에 자신이 정의한 함수를 참조시켜 호출할 수 있다.
HelloFunction.prototype.call = function(func){  // 자신의 지역 변수인 greeting만을 인자로 사용자가 정의한 함수에 넘긴다.
    func ? func(this.greeting) : this.func(this.greeting);
}
// userFunc함수를 정의하여 Hello펑션에 참조시킨뒤 HelloFunction() 의 지역 변수인 greeting을 화면에 출력시킨다.
var userFunc = function(greeting) {
    console.log(greeting);
}
var objHello = new HelloFunction();
objHello.func = userFunc;
objHello.call();


//여기서부터 무쓸모
// 예제 5-10
function saySomething(obj, methodName, name) {
    return (function(greeting){
        return obj[methodName](greeting, name);
    });
}

function newObj(obj, name) {
    obj.func = saySomething(this, "who", name);
    return obj;
}

newObj.prototype.who = function(greeting, name) {
    console.log(greeting + " " + (name || "everyone"));
}
