/*

Function() 생성자 함수로 생성하기
-자주 사용하지 않으므로 간단하게 예제 1개로 설명 후 넘어감

*/

var add = new Function('x', 'y', 'return x + y');

console.log(add(3, 4)); // 7
