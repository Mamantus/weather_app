// Replace YOUR_API_KEY with your OpenWeatherMap API key
const apiKey = '8fcc7c8dafb008cc9aebc251d9e184e0';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`;

// Select the HTML element where the weather info will be displayed
const weatherInfo = document.querySelector('.weather-info');

// Fetch the weather data from the API
fetch(apiUrl)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		// Get the current date and time
	const date = new Date();
	// Format the date and time as a string
	const dateTimeString = date.toLocaleString();
		// Update the HTML with the weather information
		weatherInfo.innerHTML = `
		${data.name}		
			<p><strong>Date and Time:</strong> ${dateTimeString}</p> 			<p><strong>Temperature:</strong>
			<p><strong>City:</strong> ${data.name}</p>
			<p><strong>Temperature:</strong> ${(data.main.temp - 273.15).toFixed(1)} &deg;C</p>
			<p><strong>Humidity:</strong> ${data.main.humidity}%</p>
			<p><strong>Weather Description:</strong> ${data.weather[0].description}</p>
			<p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
		`;
	})
	.catch(error => console.error('Error fetching weather data:', error));


	function updateTime() {
		const date = new Date();
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const seconds = date.getSeconds();
		const time = `${hours}:${minutes}:${seconds}`;
		document.getElementById("time").innerHTML = time;
	  }
	  
	  setInterval(updateTime, 1000);
	
