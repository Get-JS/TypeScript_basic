(() => {

// interface Person {
//   name: string;
//   age: number;  
// }

// extends 불가
type Person = {
  name: string;
  age: number;
}

var seho: Person = {
  name: '세호',
  age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}

type Heroes = 'Hulk' | 'Thor' | 'Capt';

})();