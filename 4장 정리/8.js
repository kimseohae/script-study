 // Person() 생성자 함수
 var Person = function(name){
 // 함수 코드 실행 전   ( 1 )
 this.name = name;  // ( 2 )
 // 함수 리턴   ( 3 )
 }

 // foo객체 생성
 var foo = new Person('foo'); // ( 4 )
 console.log(foo.name); // ( 출력 값 ) foo  