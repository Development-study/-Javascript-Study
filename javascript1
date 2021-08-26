let sym1 = Symbol();
let sym2 = Symbol();
console.log(sym1 == sym2); //false
let heart = Symbol('하트');
console.log(heart)
console.log(heart.toString());
let heart1 = Symbol.for('하트');
let heart2 = Symbol.for("하트")
console.log(heart1 == heart2)
console.log(Symbol.keyFor(heart))
console.log(Symbol.keyFor(heart1))
let t = `Man errs as long as
he strives`;
let t2 = "Man errs as long as\nhe strives";
let t3 = `Man errs as long as\nhe strives`;
let t4 = String.raw`Man errs as long as\nhe strives`;
console.log(t)
console.log(t2)
console.log(t3)
console.log(t4)
let a = 2, b = 3;
console.log(`${a} + ${b} = ${a+b}`);
let now = new Date();
console.log(`오늘은 ${now.getMonth() + 1} 월 ${now.getDate()} 일입니다.`)
let card = {
    suit : "하트", 
    rank: "A"
};
card.suit //하트
card["rank"] //A

card.color //undefined
card.value = 14; //value 프로퍼티 추가
console.log(card);
delete card.value; //value 프로퍼티 삭제
console.log(card);

let method = {
    method1 : () => {
        console.log("hello!");
    },
    method2 : () => {
        console.log("hello world!");
    }
};

method.method1();
method.method2();

function square(x) {
    return x * x;
}

console.log(square(2))

function dist(p, q) {
    let dx = q.x - p.x;
    let dy = q.y - p.y;
    return Math.sqrt(dx*dx+dy+dy);
}

let p1 = {
    x: 1,
    y:1
};

let p2 = {
    x: 4,
    y: 5
};

console.log(dist(p1, p2));

let a1 = 'global';

function f() {
    a1 = 'local';
    console.log(a1);
    return a1;
}

f()

console.log(a1)

function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}

var cards = new Card("하트", "A");
console.log(cards);

 console.log(`${now.getFullYear()} 년 ${now.getMonth() + 1} 월 ${now.getDate()} 일`)
//getFullYear()  연도
//getMonth()  월 0부터 시작
//getDate()  날짜
//getDay()  요일
//getHours()  시간
//getMinutes()  분
//getSeconds()  초
//getMilliseconds() 밀리초
//toString 문자로 나타냄
//toLocaleString() 지역화된 시간과 날짜 정보
//toLocaleDateString() 지역화된 날짜 정보
//toLocaleTimeString() 지역화된 시간 정보
//getUTCHours()  UTC 시간
//toUTCString() UTC 시간과 날짜 정보

let squares = new Function("x", "return x*x");

console.log(squares(5))

let array = [1,2,3,4];
console.log(array) //[1,2,3,4]
console.log(array.length)

let array2 = new Array(1,2,3,4);
console.log(array2) //[1,2,3,4]

console.log(array[2]) //3
array[4] = 5;
array.push(6);
console.log(array)

delete array[5]
console.log(array)

//희소배열
let array3 = [1,2,3];
array3[4] = "5";
console.log(array3)

console.log(0/0) //NaN
console.log("one" * 1) //NaN
console.log(true + true) //2
console.log(1+null) //1
console.log(1 + undefined) //NaN

// Math.random() //0이상 1미만의 난수
// Math.round() //반올림
// Math.trunc() //정수부

console.log(Math.trunc(Math.round(Math.random() * 10 + 1)))

// == 값이 같음
// != 값이 다름
// === 값과 타입이 같음
// !== 값과 타입이 다름
// << 왼쪽 시프트 105 << 3 = 840
// >> 부호 있는 오른쪽 시프트 -91 >> 3 = -12
// >>> 부호 없는 오른쪽 시프트 -91 >>> 3 = 536870900
// typeof 데이터 타입을 조사한다
// void 정의 되지 않는 값을 반환
// delete 객체의 프로퍼티나 배열 요소 제거
// new 새로운 객체를 생성
// instanceof 객체의 종류 확인
// ?: 조건 연산자
