(() => {

interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: 'HIDD'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
const ssau = {
  name: 'he',
  age: 100
}
getUser(ssau);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a','b','c'];
// arr[0] = 10;

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}
// obj['cssFile'] = 'a' Error

Object.keys(obj).forEach(function(value) {});

// implements
interface CraftBeer {
  beerName: string;
  nameBeer(beer: string): void;
}
class myBeer implements CraftBeer {
  beerName: string = 'Baby Guinness';
  nameBeer(b: string) {
    this.beerName = b;
  }
  constructor() {}
}

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

var captain: Developer = {
  language: 'ts',
  age: 100,
  name: 'jj'
}

// 하이브리드 타입
// 함수 타입이면서 객체 타입을 정의할 수 있는 인터페이스가 있습니다.
interface HyCraftBeer {
  (beer: string): string;
  brand: string;
  brew(): void;
}

function hyMyBeer(): HyCraftBeer {
  let my = (function(beer: string) {}) as HyCraftBeer;
  my.brand = 'Beer Kitchen';
  my.brew = function() {};
  return my;
}

let brewedBeer = hyMyBeer();
brewedBeer('My First Beer');
brewedBeer.brand = 'Pangyo Craft';
brewedBeer.brew();

})();
