function callLater(obj, a, b) {
    return (function(){
        obj["sum"] = a + b;
		console.log(obj["sum"]);
    });
}

var sumObj = {
	sum : 0
}

var func = callLater(sumObj, 1, 2);
setTimeout(func, 500);

/*
setTimeout 함수는 웹 브라우저에서 제공하는 함수.
-> 첫번째 인자로 넘겨지는 함수 실행의 스케쥴링을 알 수 있다.
-> callLater 함수를 setTimeout함수로 호출하려면, 변수 func에 함수를 반환받아
setTimeout() 함수의 첫번째 인자로 넣어주면 된다.
-> 반환되는 함수는 당연히 클로저고, 사용자가 원하는 인자에 접근할 수 있다.
*/

