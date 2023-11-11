// ---------------------------- 추가 공부/복습 ----------------------------

// rest parameter함수
function restFnc(...a : (number|string)[]){
    console.log(a)
}
restFnc(1,"2",3,4,"5") // 결과는 배열로 담아서 보여줌 -> 콘솔창에 [1,2,3,4,5]로 보여줌. -> 반복문 돌리기 가능 
// spread operator
let array1 = [1,2,3]
let array2 = [4,5]
let array3 = [...array1, ...array2] // 결과 : [1,2,3,4,5]

// destructuring
let [typeA, typeB] = ['hello', 100]
// typeA 는 'hello'
// typeB 는 100

let {name:name, age:age} = {name: 'HJ', age:2}
//  let {name, age} = {name: 'HJ', age:2}로 생량 가능

// Generic
function genericFnc <MyType> (x:MyType[]):MyType{
    return x[0]
}

let a = genericFnc<number>([4,2])
let b = genericFnc<string>(['1', '2'])

//contstraint
function constraintFnc<MyType extends number>(x:MyType){
    return x-1 
    // extends number를 쓰지 않으면 x에 밑줄.
    // 이유는 함수가 미리 발생할 수 있는 에러를 알려주는 것임. 예를 들어 string으로 들어오면 -1이 안되니까.
    // 그래서 extends number로 타입을 narrowing 하는 것! (if문 같이 조건이라고 생각해도 됨) 
}
let c = constraintFnc<number>(100)