/*
예제 5-11에서의 발생할 문제를 해결.
*/

//클로저를 활용하여 buffAr을 추가적인 스코프에 넣고 사용하게되면, 문제점 해결 완료.
var getCompletedStr = (function(){
    var buffAr = [
        'I am ',
        '',
        '. I live in ',
        '',
        '. I\'am ',
        '',
        ' years old.',
    ];

    return (function(name, city, age) {
        buffAr[1] = name;
        buffAr[3] = city;
        buffAr[5] = age;

        return buffAr.join('');
    });
})();

var str = getCompletedStr('zzoon', 'seoul', 16);
console.log(str);

