/*
< 루프 안에서 클로저를 활용할 때는 주의하자  >
*/

/*
1,2,3을 1초 간격으로 출력하고자 만든 예제이다.
하지만,
결과: 4가 연속 3번 1초 간격으로 출력된다.

1. setTimeOut 함수의 인자로 들어가는 함수는 자유 변수 i를 참조한다.
2. 이 함수가 실행되는 시점은 countSecondes() 함수의 실행이 종료된 이후다.
3. i값은 이미 4가 된 상태이다.
5. setTimeout()로 실행되는 함수는 모두 4를 출력하게된다.
*/
function countSeconds(howMany) {
  for (var i = 1; i <= howMany; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
};
countSeconds(3);

/*
function countSeconds(howMany) {
  setTimeout(function () {  console.log(1);  }, 1000);
  setTimeout(function () {  console.log(2);  }, 2000);
  setTimeout(function () {  console.log(3);  }, 3000);
};
countSeconds(3);

function countSeconds(howMany) {
  for (var i = 1; i <= howMany; i++) {
    (function () {
      var currentI = i;
      setTimeout(function () {
        console.log(currentI);
      }, currentI * 1000);
    }());
  }
};
countSeconds(3);


function countSeconds(howMany) {
  for (var i = 1; i <= howMany; i++) {
    // The IEF remembers the current value of i using a function parameter
    (function (currentI) {
      setTimeout(function () {
        console.log(currentI);
      }, currentI * 1000);
    }(i));
  }
};
countSeconds(3);

function countSeconds(howMany) {
  for (var i = 1; i <= howMany; i++) {
    // The IEF remembers the current value of i using a function parameter
    (function (i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }(i));
  }
};
countSeconds(3);
*/
