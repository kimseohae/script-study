function myFunction() {
    console.dir(arguments);

    // arguments.shift(); 에러 발생(arguments 객체는 length 프로퍼티만을 가진 유사객체배열)

    // arguments 객체를 배열로 변환
    var args = Array.prototype.slice.apply(arguments);
    console.dir(args);
}

myFunction(1,2,3);
