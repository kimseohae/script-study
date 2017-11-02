/*

내부함수 = 함수 코드 내부에서 정의된 함수

*/

// parent() 함수 정의
function parent() {
    var a = 100;
    var b = 200;

    // child() 내부 함수 정의
    function child() {
        var b = 300;
        //내부 함수는 자신을 둘러싼 외부함수의 변수에 접근 가능하다.
        console.log(a); //parent() 함수의 변수 a값에 접근 가능!!
        console.log(b); //parent() 함수의 b가 아닌 chile() 함수의 b이다.
    }
    child();
}
parent();
//ERROR : 내부 함수는 일반적으로 자신이 정의된 부모함수 내부에서만 호출이 가능하다.
child();
