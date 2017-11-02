// 내부 함수 this 바인딩
var value = 100;

var myObject = {
    value: 1,
    func1: function () {
        var that = this; //부모함수인 func1()의 this값을 that 변수에 저장했다

        //func2(), func3() 내부함수는 자신을 둘러싼 부모함수인 func1()의 변수에 접근이
        //가능하므로, func2()와 func3()도 that 변수로 func1()의 this가 바인딩된 객체인
        //myObject에 접근 가능하게 된다.

        this.value += 1;
        console.log('func1() called. this.value : ' + this.value);

        func2 = function () {
            that.value += 1; //this: myObject
            console.log('func2() called. this.value : ' + that.value);

            func3 = function () {
                that.value += 1; //this: myObject
                console.log('func3() called. this.value : ' + that.value);
            }
            func3();
        }
        func2();
    }
};

myObject.func1(); // func1 메서드 호출
