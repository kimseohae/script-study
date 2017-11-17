// myObject 객체 생성
     var myObject = {
     name : 'foo',
     sayName : function() {
             console.log(this.name);
         }
     }
    // otherObject 객체 생성
     var otherObject = {
         name : 'bar'
     }
     // otherObject.sayName() 메서드
     otherObject.sayName = myObject.sayName;
     // sayName() 메서드 호출
     console.log(myObject.sayName);  // ( 1 )
     console.dir(otherObject.sayName); // ( 2 )
