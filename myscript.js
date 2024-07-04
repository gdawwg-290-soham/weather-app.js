const apiKey = "9d44d147ab0347c753b1f4bc53d3a40a";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Adelaide"; //Here we are getting data of city that we have inserted in the query. We need to generalise this function
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; // so we have removed the city name from query q and inserted it as an attribute in fucntion checkWeather(city)

const searchBox = document.querySelector(".search input"); // to search city
const searchBtn = document.querySelector(".search button"); // when u click on search button it should return city information in the checkWeather()
const weatherIcon = document.querySelector(".weather-icon") // to update image of weather


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    //check response status
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
    var data = await response.json(); //This variable data will have all data from city Adelaide;

     // Updation of waether data
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h";


    //Updation of image according to weather data
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"; 
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
    // console.log(data); so that initially it doesnt show any data from garbage value stored as NEW YORK
}
    searchBtn.addEventListener("click", () =>{
        checkWeather(searchBox.value); // this function has city information in the input field. To get data in the input field we will add searchBox.value -> will give city name from i/p field and will pass it through checkWeather and give information of particular city
    })

// checkWeather(); //whenever this webpage is loaded it will call this function