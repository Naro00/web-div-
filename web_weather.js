const APIKEY = "d46d63070b3955986a3f31ddb178e815";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); //자바스크립트가 url을 넷트워크에서 부름 , fetch만 쓰면 화면으로 불러오는데 오래 걸려서 then을 사용)
}
function onGeoError(){
    alert("위치를 찾을 수가 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);