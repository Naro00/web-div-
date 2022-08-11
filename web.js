const logininput = document.querySelector("#loginform input");
const loginform =document.querySelector("#loginform");
const hello = document.querySelector("#hello");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME = "username"

function loginbuttonClick(event){
    event.preventDefault(); //브라우저의 동작을 일시정지하고 받아온 정보를 보여줌
    loginform.classList.add(HIDDEN_CLASSNAME);
    const username = logininput.value;
    localStorage.setItem(USERNAME,username);
    sayHello(username);
}
//html form이 실행되면 자동으로 submit이 일어나고 새로 고침 되기 때문에 그것을 방지하기 위한 함수

loginform.addEventListener("submit", loginbuttonClick); //submit 될때 함수를 실행함

function sayHello(username){
    hello.innerText = `Hello ${username}`;
    hello.classList.remove(HIDDEN_CLASSNAME);
}

const getUserID = localStorage.getItem(USERNAME);

if(getUserID === null){
    loginform.classList.remove(HIDDEN_CLASSNAME);
    loginform.addEventListener("submit", loginbuttonClick);
}else{
    sayHello(getUserID);
}