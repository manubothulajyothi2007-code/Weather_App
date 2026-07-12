const apiKey =  "YOUR_API_KEY";
const serachBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("city");
serachBtn.addEventListener("click",function(){
    const city = cityInput.value.trim();


    console.log(city);
    if(city===""){
        alert("Please enter a city name.");
        return;
    }
    getWeather(city);
});
async function getWeather(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("City not found");
        }
        const data = await response.json();
        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temperature").innerText = `🌡️ Temperature: ${data.main.temp} °C`;
        document.getElementById("condition").innerText = `☁️ Condition: ${data.weather[0].main}`;
        document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").innerText = `💨 Wind Speed: ${data.wind.speed}m/s`;
    } catch (error){
        alert(error.message);
        document.getElementById("cityName").innerText = "";
        document.getElementById("temperature").innerText = "";
        document.getElementById("condition").innerText = "";
        document.getElementById("wind").innerText = "";
    }
}
console.log("Weather App is working!");