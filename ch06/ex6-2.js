function Person(arg) {
	this.name = arg;
}

//Person 함수객체의 prototype 프로퍼티에 함수 정의
Person.prototype.getName = function() {
	return this.name;
}

//Person 함수객체의 prototype 프로퍼티에 함수 정의
Person.prototype.setName = function(value) {
	this.name = value;
}

//Person으로 객체 생성 _ 각 객체는 따로 함수 객체를 생성할 필요 없이 함수를 프로토타입 체인으로 접근이 가능하다.
var me = new Person("me");
var you = new Person("you");
console.log(me.getName());
console.log(you.getName());
