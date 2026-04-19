async function getWeather() {
  let temp_data = document.getElementById("temp_data"); 
  let humidity_data = document.getElementById("humidity_data"); 
  let wind_data = document.getElementById("wind_data"); 
  let cloudy_data = document.getElementById("cloudy"); 
  let city_Name = document.getElementById("city_name"); 
  let input_box = document.getElementById("input_box");

  let input = input_box.value.trim();

  if (!input) {
    alert("Please enter a city name");
    return;
  }

  let api = "3696164a45e2561f5063e4c86058a6cc";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      alert(data.message);
      return;
    }

    temp_data.textContent = data.main.temp;
    humidity_data.textContent = data.main.humidity; 
    wind_data.textContent = data.wind.speed;
    cloudy_data.textContent = data.clouds.all;
    city_Name.textContent = data.name;

  } catch (error) {
    console.log("Error:", error);
  }
}


   



