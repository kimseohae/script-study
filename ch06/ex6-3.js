Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
}

function Person(arg) {
    this.name = arg;
}

//더글라스 크락포드 (함수를 제시하면서 메소드를 정의하는 방법)
Person.method("setName", function(value) {
    this.name = value;
});

Person.method("getName", function() {
    return this.name;
});


var me = new Person("me");
var you = new Person("you");
console.log(me.getName());
console.log(you.getName());

