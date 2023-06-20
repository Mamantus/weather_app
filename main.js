	const apiKey = "8fcc7c8dafb008cc9aebc251d9e184e0";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

	const searchBox = document.querySelector(".search input")
	const searchBtn = document.querySelector(".search button")

        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            let data = await response.json();

            console.log(data);

			document.querySelector(".weather").innerHTML = data.weather[0].main;
			document.querySelector(".city").innerHTML = data.name;
			document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C" ;
			document.querySelector(".humidity").innerHTML = "Luftfuktighet: " + data.main.humidity + " %";
			document.querySelector(".pressure").innerHTML = "Lufttryck: " + data.main.pressure
			document.querySelector(".wind").innerHTML = "Vindhastighet: " + data.wind.speed + " m/s"
		}

		setInterval(() => {
			checkWeather("yourCity");
			}, 1000 * 60 * 30); // 1000 milliseconds * 60 seconds * 30 minutes = 1800000 milliseconds

	searchBtn.addEventListener("click", ()=> {
		checkWeather(searchBox.value);
	})	


	

    