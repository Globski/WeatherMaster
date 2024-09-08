# WeatherMaster

## Description

The weather application WeatherMaster aims to offer a smooth, ad-free experience while providing precise and timely weather information to guarantee accurate forecasts, the app aggregates data from several sources of weather information.

## Features
- **Backend Server**: Handles API requests and integrates with third-party weather APIs.
- **Frontend**: The user interface that communicates with the backend server and presents weather data to users.
- **APIs**: Routes for retrieving weather information, user preferences, and event management.

## Environment

- Node.js (v14.x or later)
- NPM or Yarn
- Docker (optional, for containerization)


## Requirement



### Weather APIs

- **Current Weather**
  - **Description**: Returns current weather conditions for a specified location.
  - **Response**: `{ "temperature": "15°C", "conditions": "Clear", "humidity": "80%" }`

- **Short-Term Forecast**
  - **Description**: Provides a short-term weather forecast (next 24 hours) for a specified location.
  - **Response**: `{ "hourly": [ ... ] }`

- **Long-Term Forecast**
  - **Description**: Provides a long-term weather forecast (up to 10 days) for a specified location.
  - **Response**: `{ "daily": [ ... ] }`

## 3rd Party APIs

- [OpenWeatherMap API](https://openweathermap.org/api): Primary source for weather data.
- [AccuWeather API](https://developer.accuweather.com/): Used as a fallback or supplementary source.
- [Weatherbit API](https://www.weatherbit.io/): Alternative source for cross-referencing data.

## Continuous Integration / Continuous Deployment (CI/CD)

The project uses CircleCI for CI/CD.

## How to use
### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weathermaster.git
   ```

2. Navigate to the project directory:
   ```bash
   cd weathermaster
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory and add your API keys and configuration.

5. Start the server:
   ```bash
   npm start
   ```

6. Access the app at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
