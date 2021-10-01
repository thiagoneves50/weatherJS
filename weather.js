class Weather {
	constructor(city, state) {
		this.apiKey = "Q2S2ZJJJB4A5FBN7BCZBLYHBQ";
		this.address = {
			city: city,
			state: state,
		};
	}

	// Fetch weather from api
	async getWeather() {
		const response = await fetch(
			`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.address.city}%2C%20${this.address.state}?unitGroup=metric&key=${this.apiKey}`
		);

		const responseData = await response.json();
		// return responseData.currentConditions;
		return responseData;
	}

	// Change location
	changeLocation(city, state) {
		this.address = {
			city: city,
			state: state,
		};
	}
}
