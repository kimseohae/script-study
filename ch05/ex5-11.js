/*

*/
var buffAr = [
	'I am ',
	'',
	'. I live in ',
	'',
	'. I\'am ',
	'',
	' years old.',
];

//익명의 함수를 즉시 실행시켜 반환되는 함수를 할당
//반환되는 함수 - 클로저(자유변수 buffAr을 스코프 체인에서 참조할 수 있다.)
function getCompletedStr(name, city, age) {
	buffAr[1] = name;
	buffAr[3] = city;
	buffAr[5] = age;

	return buffAr.join('');
}

var str = getCompletedStr('zzoon', 'seoul', 16);
console.log(str);

