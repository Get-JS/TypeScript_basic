// why generics?
(() => {
  
function logTextAny(text: any): any {
  console.log(text);
  return text;
}
logTextAny(10); // 숫자 10
logTextAny('하이'); // 문자열 하이
logTextAny(true); // 진위값 true

function logTextType(text: string) {
  console.log(text);
  return text;
}
const a = logTextType('a');
// logTextType(10); Error

function logNumberType(num: number) {
  console.log(num);
  return num;
}
const num = logNumberType(10);
// logNumberType(true); Error

// 유니온 타입
// 반환값의 타입 추론이 어려워 지기 때문에 관리가 힘들어 진다.
function logTextUnion(text: string | number) {
  console.log(text);
  return text;
}

})();

// 제네릭 사용
(() => {

function logText<T>(text: T): T {
  console.log(text);
  return text;
}
const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(true);
logText('a') // 타입 추론 자동 string 타입 넘어감
logText(10) // 타입 추론 자동 number 타입 넘어감

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
  value: T;
  selected: boolean;
}
const obj: Dropdown<string> = { value: 'abc', selected: false };
// const obj: Dropdown<number> = { value: 'abc', selected: false }; Error

// 제네릭 타입 제약(hint)
function logTextLengthArrayLiteral<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}
logTextLengthArrayLiteral<string>(['hi', 'abc']);

// 제네릭 타입 제약2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength({ length: 10 });
logTextLength({ length: 10, a: 10, b: 20 });
// logTextLength(10); Error
// logTextLength({ leng: 10 }); Error

// 제네릭 타입 제약3 - keyof
// key 값들 중에 한가지로 type을 갖는다. 즉, 타입을 정할 때 범위를 지정
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
  // if (itemOption === 'name') {
  //   console.log('itemOption type is string');
  //   return itemOption;
  // }
  // if (itemOption === 'price' || itemOption === 'stock') {
  //   console.log('itemOption type is number');
  //   return itemOption;
  // }
}
const option = getShoppingItemOption('name');
option.toUpperCase(); // Name
// getShoppingItemOption(10); Error
// getShoppingItemOption<string>('a'); Error

})()
