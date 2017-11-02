var test = 'This is test'; //전역변수 선언
console.log(window.test); //window객체의 프로퍼티로 접근가능

// sayFoo() 함수
var sayFoo = function () {
    //this.test = window.test (함수 호출시, this는 전역 객체에 바인딩된다)
    console.log(this.test); // sayFoo() 함수 호출 시 this는 전역 객체에 바인딩된다.
};

sayFoo(); // this.test 출력
