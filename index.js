var 이름 = "정혁진";
var 배열 = ["kim", "jung"];
var 객체 = { name1: "kim" };
var 유니온타입 = 123;
var 내꺼 = "123";
//parameter 변수는 number
//return 값도 number
function myFnc(x) {
    return x * 2;
}
var john = [123, true];
var steve = { name2: "Jung" };
var steven = { name3: "jung", age: 123 };
//Class
var User = /** @class */ (function () {
    function User(name4) {
        this.name4 = name4;
    }
    return User;
}());
////////////////////////////////////////////////////////
var userName = "Steve";
var userAge = 33;
var isMarried = false; // :null, :undefined
var members = ["kim", "park"];
var membersNum = [1, 2, 3, 4, 5];
var membersData = {
    member1: "kim",
    member2: "jung",
};
// 타입지정은 원래 자동으로 된다. 굳이 전부 다 지정해줄 필요는 없다.
var 타입이뭘까 = "steve"; //마우스 올려보면 타입 나옴
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
var unionArray = [1, "2", 3];
var unionObject = { a: 123, b: "123" };
// any 타입 에러가 나도 알 수 없음
var anyType;
anyType = "test";
anyType = 123;
// unknown타입이 조금 더 안전
var unknownType;
unknownType = "test";
unknownType = {};
// let unknownTest: string = unknownType; // unknown은 에러남, any는 에러 안남
// unknown은 number타입이 아님, 수학연산이 안됨
var 나이;
// 나이 + 1  //에러남 -> 유니온타입은 수학연산 안됨
// 함수 타입 지정 -> *****타입지정된 파라미터는 필수로 파라미터를 넣어줘야함*****
// function 함수(x?:number):number{....}
//뒤에 ?를 사용하면 파라미터를 넣어도 되고 안넣어도 됨
// x: number | undefined 와 같은 말임
function 함수(x) {
    return x * 2;
}
함수(20); // 40
// 함수('20') //에러남
// return 없는 함수
function 리턴없는함수(x) {
    1 + 1;
    // return 1 + 1 //에러남
}
function sayHi(x) {
    if (x) {
        console.log("안녕하세요 " + x);
    }
    else {
        console.log("왜입력안함");
    }
}
