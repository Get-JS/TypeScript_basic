(() => {

// 유니온 타입 |
// 인터섹션(교차) 타입 &

// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// # Union 타입 문법 - `any` 보다는 명시적임
var seho: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// Developer | Person 공통 속성
// 함수를 호출하는 시점에 Person 타입이 올지 Developer 타입이 올지 알 수가 없기 때문에 
// 어느 타입이 들어오든 간에 오류가 안 나는 방향으로 타입을 추론하게 됩니다.
function askSomeone1(someone: Developer | Person) {
  someone.name;
  // someone.age;
  // someone.skill;
}
askSomeone1({name: 'developer', skill:'WEB'});
askSomeone1({name: 'developer', age:100});

// Developer & Person 모든 속성
function askSomeone2(someone: Developer & Person) {
  someone.name;
  someone.age;
  someone.skill;
}
// askSomeone2({name: 'developer', skill:'WEB'}); Error
askSomeone2({name: 'developer', skill:'WEB', age:100});

})();
