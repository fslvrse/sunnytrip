const API_KEY = "980a5a2ec117e439867d6360fad641c5";
function getWeather() {
    // Your code to fetch and display the weather information
    console.log("knowTheWeather function is called");
}


// Add event listener to the form
document.getElementById("weatherForm").addEventListener("submit", function(event) {
  event.preventDefault();
  getWeather();
});

async function getWeather() {
  // Get the city name from input
  const cityInput = document.getElementById("input");
  const city = cityInput.value;

  // Check if city is empty
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  try {
    // Show loading state
    const weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.classList.remove("hidden");
    weatherInfo.classList.add("loading");
    document.getElementById("cityName").textContent = "Loading...";

    // Make API call to OpenWeather
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }
// this part was extreamly hard i could not get it right so i had to watch a totorial.
    const data = await response.json();

    weatherInfo.classList.remove("loading");
    document.getElementById("cityName").textContent = `Weather in ${data.name}`;
    cityInput.value = "";
    document.getElementById("cityName").textContent = `Weather in ${data.name}`;
    document.getElementById(
      "temp"
    ).textContent = `Temp: ${Math.round(data.main.temp)}°C`;
    
  } catch (error) {
    // Handle errors
    weatherInfo.classList.remove("loading");
    weatherInfo.classList.add("hidden");
    document.getElementById("cityName").textContent = "Error";
    document.getElementById("temp").textContent = error.message;
   
  }
}
