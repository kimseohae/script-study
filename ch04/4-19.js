// 함수 외부에서도 특정 함수 스코프 안에 선언된 내부함수를 호출할 수 있다
// 부모함수에서 내부함수를 외부로 리턴하면, 부모 함수 밖에서도 내부함수를 호출가능

function parent() {
    var a = 100;

    // child() 내부 함수
    var child = function () {
        console.log(a);
    }

    // child() 함수 반환
    return child;
}

//inner 변수에 함수 호출 연산자 ()를 붙여 함수 호출 구문을 만들면, parent() 함수 스코프 밖에서도 내부 함수 child()가 호출된다.

var inner = parent(); //parent()함수 호출 후,
inner(); //이 결과로 반환된 inner()함수 호출

// 이와 같이 실행이 끝난 parent()와 같은 부모 함수 스코프의 변수를 참조하는 inner() 함수를 '클로저'라고 한다.
