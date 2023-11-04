```ts
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

// type을 아직 모르거나 애매할 때는 narrowing을 하자
// 대표적인 type narrowing 연산자는 typeof, 그 외 : in, instanceof
function narrowingFnc(x: number|string) {
  // return x + 1 이렇게 치면 빨간밑줄 생김 
  if(typeof x === 'number'){
    return x +1 
  } else {
    return x + '1'
  }
}
function narrowingFnc2(x: number|string) {
  let array:number[] = [];
  if(typeof x === 'number'){
    array[0] = x;
  }
}

// narrowing이 싫으면 assertion 문법 써도 됨 (타입 덮어쓰기)
// 막 쓰면 안됨. 쓰는 이유가 몇 가지 있음
// 1. 유니온 타입을 하나의 타입으로 확정하고 싶을때, narrowing 용도로 사용. 타입 '변경'은 안됨!
// 2. as문법은 에러를 체크할 수 없기 때문에, 무슨 타입이 들어올지 정말 확실하게 알 때만 사용(그래서 굳이 사용? 차라리 narrowing문법)
function assertionFnc(x:number|string){
  let array:number[] = [];
  array[0] = x as number;
}


// type변수/type alias : 타입이 너무 길고 복잡하면 변수에 담아서 사용 가능하다
// let animal: string | number | undefined
type Animal = string | number | undefined;
let animal : Animal = 123;

type Animal2 = {name:string, age:number}
// let animal2 :{name:string, age:number} = {name:'강아지', age:1 } 
let animal2 :Animal2 = {name:'강아지', age:1 }  // 훨씬 보기 좋고 편함

// object가 const여도 object안의 내용을 변경 할 수 있음
const girl = {
  name: 'girl'
}
girl.name = 'boy';

// ts 는 변경 못하게 막을 수 있다.
type Girl2 = {
  readonly name:string
}
const girl2:Girl2 = {
  name: 'girl'
}
// girl2.name = 'boy';  //에러남

// type 합치기도 가능
type Name = string 
type Age = number
type Person = Name | Age

// &연산자로 object 타입 합치기(extend 하기)
type positionX = {x:number}
type positionY = {y:number}
type NewPostion = positionX & positionY
let newPosition : NewPostion = {x:2, y:3}

//같은 이름의 type변수 재정의 불가능
// type positionX = {x:string} //에러남

// literal type : const 변수 유사품 -> 사전에 정의한 것만 받는다
// 변수에 뭐가 들어올지 더 엄격하게 관리 가능, 자동완성 힌트도 보임
let name3:'Jung';
// name3 = 'kim' // 에러남
let itsMe: '남자' | '개발자'
itsMe ='개발자'
function itsmeFnc(a:'hello') : 1 | 0{
  return 1
}
// itsmeFnc('hi') // 에러남
function rspFnc(a: 'r'|'s'|'p'): ('r'|'s'|'p')[] {
  return ['r']
}
rspFnc('s')
// const변수의 한계 : object안에 변수 변경 가능 -> 확정성이 없다 -> 업그레이드 버전이 literal type

// 함수와 methods에 type alias 지정 -> 사용하는 함수는 꼭 '함수 표현식'으로 사용해야 한다.
// 함수에서 사용
type FncType = (a:number) => number;
let fnctype:FncType = function(x){
  return x + 1
}
// method에서 사용
type UserInfo = (a:number) => number
let userInfo:{name:string, getAge:UserInfo} = {
  name: 'jung',
  getAge(x){
    return x + 1
  }
}
userInfo.getAge(1);

// HTML 변경과 조작할 때 주의점
let title = document.querySelector('#title');
// title.innerHTML = '제목변경' // Element | null 타입으로 에러남. -. narrowing 해줘야 함
//방법 1.
if(title != null){
  title.innerHTML = '제목변경'
}
//방법 2.
if(title instanceof Element){
  title.innerHTML = '제목변경'
} 
//방법 3. 사용 안하는 것이 좋음, 비상시나 100%확신일 때만 사용
let title2 = document.querySelector('#title') as Element;

//방법 4.  optional chaining : 제목에 innerHTML이 있으면 출력, 없으면 undefined 
if(title?.innerHTML != undefined){
  title2.innerHTML = '반갑습니다'
}

//방법 5. tsconfig null check를 false로 변경 (무식한 방법)
//HTML 태그들은 각각 type들이 따로 있다.

//Interface
interface Square{
  color : string,
  width : number
}
let square : Square = {
  color:'black',
  width : 17
}

//interface 와 type 차이가 뭘까
//extends가 가능
interface Student {
  name: string
}
interface Teacher extends Student{
  age: number
}
let student:Student = {name:'steve'}
let teacher:Teacher = {name:'jung',age:3}

//type으로 extends 만들기 -> intersection(교차타입) : &기호, 그런데 이건 extends라기 보다 왼쪽, 오른쪽 둘 다 만족하는 타입 만들어 주세요 라는 뜻.
type Dog = {name:string}
type Cat = {age:number} & Dog // name과 age 둘 다 필요

//type과 interface의 중요한 차이는 
//interface는 중복 선언이 가능하다. type은 불가
interface Me {name:string}
interface Me {age:number}
let me:Me = {
  name:'steve',
  age:3
}
//외부 라이브러리 같은 경우 interface를 많이 사용한다. 
//라이브러리들은 사람들이 입맛에 맞게 커스터마이징 하기 용이하게 하기 위해 interface를 많이 사용
//중복 속성 사용하면???
type Bird = {name:string}
type Dragon = {name:number} & Bird
// let dragon: Dragon = {name: '용'} // type이 never라고 에러남
// interface가 조금 더 안전함, 미리 에러를 알려줌, type은 값을 할당할 때에 에러 띄워줌. 

// enum
enum Auth {
  admin = 0, // 관리자를 0으로 표현
  user = 1,  // 회원은 1로 표현
  guest = 2  // 게스트는 2로 표현
}

// Auth.admin(==0) 으로 의미있게 값 체크 가능
let userType = 0;
if (userType !== Auth.admin) {
  alert("관리자 권한이 없습니다");
}

// 누가 코드를 읽어도, 관리자 여부를 체크하는 코드임을 이해할 수 있다!

// 게시물 종류를 enum으로 관리
enum Articles {
  notice,  // 0: 공지사항 (값 생략시, 0 할당됨)
  board,   // 1: 일반글 (이전값에 1을 더한 1이 할당됨)
  comment  // 2: 댓글 (이전값에 1을 더한 2가 할당됨)
}

// 게시물 등록 분기 처리에 enum 사용
let articleType = 0;
switch(articleType){
  case Articles.notice:
      // DB에 공지로 등록 작업
      break;
  case Articles.board:
      // DB에 일반글로 등록 작업
      break;
  case Articles.comment:
      // DB에 댓글로 등록 작업
      break;
  default:
      break;
}

// 언어 종류 관리
enum Languages {
  korean = 'ko', // 문자열을 입력할 수도 있다.
  english = 'en',
  japanese = 'jp',
  chiense = 'cn'
}

// setLanguage("ko-kr") // 하드코딩은 이런 실수를 유발한다.
const setLanguage = (lang:string) => {}
setLanguage(Languages.korean) // enum 사용시, 의미파악이 쉽고 자동완성까지 된다.

//1. enum은 기본으로 0부터 1씩 증가하는 값을 갖는다.
//2. 숫자 값을 지정해줄 수 있다. 정의되지 않은 값은 이전 값에서 1씩 증가한다.
//3. 문자열을 지정해 줄수 있다.
//enum은 한번 생성되면, 속성 추가 및 수정이 불가하다. 객체는 생성 이후에도 속성을 추가하고 변경할 수 있다.
//enum은 속성 값으로 숫자, 문자열만 할당할 수 있다. 객체는 온갖 것을 다 넣을 수 있다.
//즉, enum은 JS객체보다 더 엄격하게 타입을 정의하여 사용할 때 유용하다. (이게 타입스크립트를 사용하는 이유 중 하나이기도 하다)
```