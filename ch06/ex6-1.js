/*
- 자바스크립트에는 클래스란 개념이 없다.
- 자바스크립트는 모든것이 객체고, 특히 함수 객체로 많은 것을 구현해낸다.
- 클래스, 생성자. 메서드도 모두 함수로 구현이 가능하다.
*/
function Person(arg) {
	this.name = arg;

	this.getName = function() {
		return this.name;
	}

	this.setName = function(value) {
		this.name = value;
	}
}

// me: Person의 인스턴스 (name 변수가 있고, getName()과 setName() 함수가 있다)
var me = new Person("zzoon"); //new 키워드로 새로운 객체 me를 생성함
console.log(me.getName()); //zzoon

me.setName("iamhjoo");
console.log(me.getName()); //iamhjoo

