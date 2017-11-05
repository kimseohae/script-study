function outerFunc(arg1, arg2){
    var local = 8;
    function innerFunc(innerArg){
        console.log((arg1 + arg2)/(innerArg + local));
    }

    return innerFunc;
}

var exam1 = outerFunc(2, 4);
exam1(2);

/*
1. 전역 실행 컨텍스트
[변수객체]
exam1
outerFunc
[Scope]

0 전역객체

------------------------->호출
2. outerFunc 실행 컨텍스트
[변수객체]
arg1
arg2
innerFunc ----->반환
local: 8
[scope]

1 outerFunc 변수 객체
0 전역객체

--------------------------->innerFunc 호출
3. innerFunc 실행 컨텍스트
[변수객체] ((arg1+arg2) / (innerArg+local) innerFunc 변수 객체와 outerFunc 변수 객체에서 모두 찾을 수 있다.)
innerArg
[scope]

2 innerFunc 변수 객체
1 outerFunc 변수 객체
0 전역객체

*/
