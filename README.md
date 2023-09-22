## WeatherLoo
The goal of this project was to create a weather app.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js installed
- npm installed

### Installing

1. Clone the repository:

   ```
   git clone https://github.com/adamly6/WeatherLoo.git
   ```

2. Change your Openweathermap apiKey

   ```
	 cd projectDirectory/src/services/weatherService.ts
	 const apiId = "Your apiID"
	 ```
   
3. Serving project

	 ```
	 cd projectDirectory
	 npm run serve
	 ```
  
	
## Usage

  In this application we can create accounts and log in to them. The application does not use the database but localStorage. When you log in you can search for cities and add them to your city list. You can switch between cities in the list. The dashboard shows current weather information, forecasts for the next days, temperature and humidity charts.

## To do

  Currently, the data on the chart and the forecast for future days are static. You need to download data from the openweathermap API.

## Initial visual design of the website
  
  https://www.figma.com/file/UrBFh3BmzgXhunaNBhoYdr/SYSTEM?type=design&node-id=158-2&mode=design
  
