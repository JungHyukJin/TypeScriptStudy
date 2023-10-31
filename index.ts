let 이름: string = "정혁진";

let 배열: string[] = ["kim", "jung"];

let 객체: { name1?: string } = { name1: "kim" };

let 유니온타입: string | number = 123;

//타입이 길면 변수에 담아서 사용 가능( 구분하기 위해 type은 주로 대문자로 씀)
type MyType = string | number;
let 내꺼: MyType = "123";

//parameter 변수는 number
//return 값도 number
function myFnc(x: number): number {
  return x * 2;
}

//튜플
type Member = [number, boolean];
let john: Member = [123, true];

//Object
type Who = {
  name2: string;
};
let steve: Who = { name2: "Jung" };

//만약 Object안에 이름, 나이 등등 지정해야할 속성이 너무 많으면 아래처럼 사용
type Whoooo = {
  [key: string]: string | number;
};
let steven: Whoooo = { name3: "jung", age: 123 };

//Class
class User {
  name4: string;
  constructor(name4: string) {
    this.name4 = name4;
  }
}

////////////////////////////////////////////////////////

let userName: string = "Steve";
let userAge: number = 33;
let isMarried: boolean = false; // :null, :undefined
let members: string[] = ["kim", "park"];
let membersNum: number[] = [1, 2, 3, 4, 5];
let membersData: { [key: string]: string } = {
  member1: "kim",
  member2: "jung",
};

// 타입지정은 원래 자동으로 된다. 굳이 전부 다 지정해줄 필요는 없다.
let 타입이뭘까 = "steve"; //마우스 올려보면 타입 나옴
type ProjectType = {
  member: string[];
  days: number;
  started: boolean;
};
let project: ProjectType = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

let unionArray: (number | string)[] = [1, "2", 3];
let unionObject: { [key: string]: string | number } = { a: 123, b: "123" };

// any 타입 에러가 나도 알 수 없음
let anyType: any;
anyType = "test";
anyType = 123;

// unknown타입이 조금 더 안전
let unknownType: unknown;
unknownType = "test";
unknownType = {};
// let unknownTest: string = unknownType; // unknown은 에러남, any는 에러 안남
// unknown은 number타입이 아님, 수학연산이 안됨

let 나이: string | number;
// 나이 + 1  //에러남 -> 유니온타입은 수학연산 안됨

// 함수 타입 지정 -> *****타입지정된 파라미터는 필수로 파라미터를 넣어줘야함*****
// function 함수(x?:number):number{....}
//뒤에 ?를 사용하면 파라미터를 넣어도 되고 안넣어도 됨
// x: number | undefined 와 같은 말임
function 함수(x: number): number {
  return x * 2;
}

함수(20); // 40
// 함수('20') //에러남

// return 없는 함수
function 리턴없는함수(x: number): void {
  1 + 1;
  // return 1 + 1 //에러남
}

function sayHi(x?: string) {
  if (x) {
    console.log("안녕하세요 " + x);
  } else {
    console.log("왜입력안함");
  }
}

