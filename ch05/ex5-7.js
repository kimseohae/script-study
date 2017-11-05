function outerFunc(){
	var x = 10;
	var innerFunc = function() { console.log(x); }
	return innerFunc;
}

var inner = outerFunc();
inner();

/*
1. 전역 실행 컨텍스트
[변수객체]
inner
outerFunc
[Scope]

0 전역객체

------------------------->실행
2. outerFunc 실행 컨텍스트
[변수객체]
x:10 (innerFunc에서 console.log(x);를 통해 참조하려는 변수 -> outerFunc 실행 컨텍스트 이후에 참조하려한다.)
innerFunc ------------>반환
[scope]

1 outerFunc 변수 객체
0 전역객체

--------------------------->innerFunc 실행
3. innerFunc 실행 컨텍스트
[변수객체]
[scope]

2 innerFunc 변수 객체 (outerFunc 실행 컨텍스트가 끝났지만, outerFunc 변수 객체는 여전히 남아있다.)
1 outerFunc 변수 객체
0 전역객체

*/


/*
* innerFunc()은 outerFunc()의 실행이 끝난 후에 실행된다. 그렇다면 outerFunc 실행 컨텍스트가 사라진 이후에 innerFunc 실행 컨텍스트가 생성되는 것인데, innerFunc()의 스코프 체인은 outerFunc 변수 객체를 여전히 참조할 수 있을까?
=> 참조할 수 있다.  outerFunc 실행 컨텍스트는 사라졌지만, outerFunc 변수 객체는 여전히 남아있고 innerFunc의 스코프 체인으로 참조되고 있다.
-----> 이것이 바로, '클로저'라는 개념이다.

* 클로저란?
= 이미 생명 주기가 끝난 외부 함수의 변수를 참조하는 함수.
= 클로저로 참조되는 외부 변수 : 자유변수
*/
