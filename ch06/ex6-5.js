/*
- 자바스크립트는 클래스를 기반으로 하는 전통적인 상속을 지원하지 않는다.
- 하지만, 객체 프로토타입 체인을 이용하여 상속을 구현해낼 수 있다.
- 프로토타입을 이용한 상속 : 클래스 개념없이 객체의 프로토타입으로 상속을 구현
*/
var person = {
	name : "zzoon",
	getName : function() {
		return this.name;
	},
	setName : function(arg) {
		this.name = arg;
	}
};

//인자로 들어온 객체를 부모로 하는 자식 객체를 생성하여 반환한다.
function create_object(o) {
	function F() {}; //빈 함수 객체 생성
	F.prototype = o; //F.prototype 프로퍼티에 인자로 들어온 객체를 참조
	return new F(); //새로운 객체를 만들어 반환 (반환된 객체: 부모 객체의 프로퍼티에 접근할 수 있고, 자신만의 프로퍼티를 만들 수 있다.)
}

var student = create_object(person); //person 객체를 상속하여 student 객체 생성

//(부모 객체에 해당하는 person 객체와 이 객체를 프로토타입 체인으로 참조할 수 있는 자식 객체 student를 만들어서 사용하였다.)
student.setName("me");
console.log(student.getName());

