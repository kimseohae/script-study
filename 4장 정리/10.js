var myObject = {
     name : 'foo',
      sayName  : function() {
                            console.log('My Name is ' + this.name);
                       }
     };
myObject.sayName();     // ( 1 ) MyName is foo
console.log(myObject.hasOwnProperty('name')); // ( 2 ) true
console.log(myObject.hasOwnProperty('nickName')); // ( 3 ) false
myObject.sayNickName();     // ( 4 ) Error MyObject has no method 'sayNickName'
