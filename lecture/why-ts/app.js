// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

fetchUser().then(function (response) {
  response.address.cit; // 에러 인지 불가능
});

function startApp() {
  fetchUser()
    .then(function (response) {
      // hint는 출력 됨      
      user = response.data; // return은 Promise<User>였지만, data로 작성해도 오류 표시 못 함
      
      console.log('user', user);

      // 이름, 이메일, 주소 표시하기
      username.innerText = user[0].name; // 실행하기 전 까지 타입 에러 인지 못함
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.addres.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
