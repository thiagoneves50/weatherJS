// Initialize Storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Initialize Weather Onject
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Initialize UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeatherNow);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
	const city = document.getElementById("city").value;
	const state = document.getElementById("state").value;

	// Change location
	weather.changeLocation(city, state);

	// Set location ini LS
	storage.setLocationData(city, state);

	// Get and display weather
	getWeatherNow();
});

function getWeatherNow() {
	weather
		.getWeather()
		.then((results) => {
			console.log(results);
			ui.paint(results);
		})
		.catch((err) => {
			console.log(err);
		});
}
