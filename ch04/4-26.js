//함수 호출 순서: func1 -> func2 -> func3

// 전역 변수 value 정의
var value = 100;

// myObject 객체 생성
var myObject = {
    value: 1,
    func1: function () {
        this.value += 1; //this: myObject
        console.log('func1() called. this.value : ' + this.value);

        // func2() 내부 함수
        func2 = function () {
            this.value += 1; //this:부모함수 func1()의 this와 같은 객체 : myObject
            console.log('func2() called. this.value : ' + this.value);

            // func3() 내부 함수
            func3 = function () { //this:부모함수 func2()의 this와 같은 객체: myObject
                this.value += 1;
                console.log('func3() called. this.value : ' + this.value);
            }

            func3();// func3() 내부 함수 호출
        }
        func2(); // func2() 내부 함수 호출
    }
};
myObject.func1(); // func1() 메서드 호출

/*

결과(생각과 다름)
2
101
102

자바스크립트에서는 내부함수 호출 패턴을 정의해놓지 않기 때문.

-> 내부함수가 this를 참조하는 자바스크립트의 한계를 극복하려면,
부모함수의 this를 내부함수가 접근 가능한 다른 변수에 저장하는 방법이 사용된다.
-> this 값을 저장하는 변수의 이름을 that이라고 하자.
-> that 변수로 부모함수의 this가 가리키는 객체에 접근할 수 있다.

*/
