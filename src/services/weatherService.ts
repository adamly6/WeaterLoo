const apiId = "Your apiID";

export default {
  async getWeatherData(cityId: string) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiId}`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Failed to download weather data.");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to download weather data.", error);
      throw error;
    }
  },

  async getHourlyTemperatures(cityId: string) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiId}`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Failed to download weather data.");
      }

      const data = await response.json();

      const forecastList = data.list;
      const currentTimestamp = Math.floor(Date.now() / 1000);
      const hourlyTemperatures = [];

      for (let i = 0; i < forecastList.length; i++) {
        const forecast = forecastList[i];
        const forecastTimestamp = forecast.dt;

        if (forecastTimestamp >= currentTimestamp) {
          const temperature = forecast.main.temp;
          const date = new Date(forecastTimestamp * 1000);
          const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
          hourlyTemperatures.push({
            date: date.toLocaleDateString(),
            time: time,
            temperature: temperature,
          });
        }

        if (hourlyTemperatures.length === 6) {
          break;
        }
      }

      return hourlyTemperatures;
    } catch (error) {
      console.error("Failed to download weather data.", error);
      throw error;
    }
  },

  async getDailyWeather(cityId: string) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiId}`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Failed to download weather data.");
      }

      const data = await response.json();

      const dailyWeather = [];
      let currentDate = null;

      for (let i = 0; i < data.list.length; i++) {
        const forecast = data.list[i];

        const date = new Date(forecast.dt * 1000);
        const hour = date.getHours();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        if (
          hour === 12 &&
          (!currentDate || currentDate !== date.toLocaleDateString())
        ) {
          currentDate = date.toLocaleDateString();
          dailyWeather.push({
            date: `${day}.${month}.${year}`,
            dayTemperature: (forecast.main.temp - 273.15).toFixed(1),
            humidity: forecast.main.humidity + "%",
            weatherDescription: forecast.weather[0].description,
            iconCode: forecast.weather[0].icon,
          });
        }

        if (dailyWeather.length === 5) {
          break;
        }
      }
      return dailyWeather;
    } catch (error) {
      console.error("Failed to download weather data.", error);
      throw error;
    }
  },
};
