class UI {
	constructor() {
		this.location = document.getElementById("w-location");
		this.desc = document.getElementById("w-desc");
		this.temp = document.getElementById("w-temp");
		this.string = document.getElementById("w-string");
		this.icon = document.getElementById("w-icon");
		this.details = document.getElementById("w-details");
		this.humidity = document.getElementById("w-humidity");
		this.feelsLike = document.getElementById("w-feels-like");
		this.dewpoint = document.getElementById("w-dewpoint");
		this.wind = document.getElementById("w-wind");
	}

	paint(weather) {
		this.location.textContent = weather.resolvedAddress;
		this.desc.textContent = weather.currentConditions.conditions;
		this.temp.textContent = `${weather.currentConditions.temp} °C`;
		this.string.textContent = weather.description;
		this.icon.setAttribute("class", `icon-${weather.currentConditions.icon}`);
		this.humidity.textContent = `Relative Humidity: ${weather.currentConditions.humidity}`;
		this.feelsLike.textContent = `Feels Like: ${weather.currentConditions.feelslike}`;
		this.dewpoint.textContent = `Dew: ${weather.currentConditions.dew}`;
		this.wind.textContent = `Wind: ${weather.currentConditions.windspeed}`;
	}
}
