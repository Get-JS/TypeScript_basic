(() => {

// 타입 단언(type assertion)
var a: any;
a = 20;
a = 'a'
var b = a as string;

// DOM API 조작
// <div id="app">hi</div>

var div = document.querySelector('div'); // null able (union)
if (div) div.innerText;

var div = document.querySelector('div') as HTMLDivElement;
div.innerText;

})();