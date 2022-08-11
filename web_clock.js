const clock = document.querySelector("h2#clock");

function Clock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); //padstart는 string만 가능하다.
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}   //interval 은 매번 일어나야하는 일을 말한다.

Clock(); // 한 번 함수를 호출 하지 않으면 1초 뒤 부터 시간이 나오기 때문에 바로 나오게 하기 위해서 함수 호출
setInterval(Clock, 1000);  //ms 단위 1000 = 1초
//setTimeout(); //얼마나 뒤에 기능을 호출할것인지

