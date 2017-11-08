/*
< 클로저의 프로퍼티값이 쓰기 가능하므로 그 값이 여러번 호출로 항상 변할수 있음에 유의해야한다  >
*/
function outerFunc(argNum) {
  var num = argNum;
  return function(x) {
      num += x;
      console.log('num: ' + num );
    }
}

 var exam = outerFunc(40);

 exam(5);
 exam(-10);
