(() => {

interface Developer {
  name: string;
  skill: string;
}

class Person {
  name: string;
  // skill: string;
}

var developer: Developer;
var person: Person;
// 인턴페이스 클래스 상관없이 {} 안에 정의된 속성: 타입을 체크 한다.
// developer = new Person(); Error Developer > Person 타입 호환이 안 맞음
// 명시적으로 타입을 지정하는 것보다(C#, JAVA) 코드의 구조 관점에서 타입을 지정하는게 JS 스타일
// 타입에 정의된 구조로 매핑 확인하여 값을 할당한다.
person = developer;

// 함수
var add = function(a: number, d: number) {
  // ...
}
var sum = function(a: number, b: number,c: number) {
  // ...
}
sum = add;
// add = sum; Error 매개변수, 반환의 값 sum > add

// 제네릭
interface Empty<T> {
  // ..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
// 속성 타입이 정의 되지 않았기 때문에 어떠한 값이더라도 할당이 가능하다.
empty1 = empty2;
empty2 = empty1;
empty1 = sum;
empty1 = add;

interface NotEmpty<T> {
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
// notempty1 = notempty2; Error
// notempty2 = notempty1; Error

})();