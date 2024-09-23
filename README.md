# WeatherMaster

![Weather Display Interface](https://github.com/user-attachments/assets/f38fe372-d059-46c9-b4a2-5d40e2b255b4)

## Description


WeatherMaster is a smooth, ad-free way to get up-to-date, reliable weather information. The app provides current weather information, short-term and long-term forecasts, and radar data aggregated from multiple weather sources for improved accuracy.

## Features
- **Current Weather**: Shows real-time weather conditions.
- **Hourly Forecast**: Provides weather forecasts for the next 24 hours.
- **Daily Forecast**: Displays weather forecasts for up to 10 days.

## Environment

- Node.js (v14.x or later)
- NPM or Yarn


### Weather APIs

**APIs**: Endpoints used to fetch current weather, forecasts, and radar data

- **Current Weather**
  - **Description**: Returns current weather conditions for a specified location.
  - **Response**: `{ "temperature": "15°C", "conditions": "Clear", "humidity": "80%" }`

- **Short-Term Forecast**
  - **Description**: Provides a short-term weather forecast (next 24 hours) for a specified location.
  - **Response**: `{ "hourly": [ ... ] }`

- **Long-Term Forecast**
  - **Description**: Provides a long-term weather forecast (up to 7 days) for a specified location.
  - **Response**: `{ "daily": [ ... ] }`

### Third-Party APIs

- [OpenWeatherMap API](https://openweathermap.org/api): Primary source for weather data.
- [AccuWeather API](https://developer.accuweather.com/): Used as a fallback or supplementary source.
- [Weatherbit API](https://www.weatherbit.io/): Alternative source for cross-referencing data.


- **/api/weather/current**
  - **GET**: Retrieves current weather conditions for a specified location.
  - **Response**: `{ "temperature": "15°C", "conditions": "Clear", "humidity": "80%" }`

- **/api/weather/hourly**
  - **GET**: Provides a short-term weather forecast (next 24 hours) for a specified location.
  - **Response**: `{ "hourly": [ ... ] }`

- **/api/weather/daily**
  - **GET**: Provides a long-term weather forecast (up to 10 days) for a specified location.
  - **Response**: `{ "daily": [ ... ] }`


## Technology Stack

### Frontend
- **React.js**: For dynamic user interfaces.
- **Axios**: For API communication.
- **Recharts**: For data visualization.

### Backend
- **Flask**: Lightweight web framework for handling server-side logic.
- **SQLAlchemy**: ORM for database interactions.
- **Celery**: For managing asynchronous tasks.

### Infrastructure
- **Heroku**: For cloud deployment and hosting.
- **Redis**: In-memory data store for caching and message brokering.
- **PostgreSQL**: Scalable relational database.

### Testing and Automation
- **Jest**: For unit testing React components.
- **Pytest**: For backend testing.
- **Selenium**: For end-to-end testing.
- **CircleCI**: For CI/CD automation.

## How to use

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/weathermaster.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd weathermaster
   ```

3. **Install Dependencies**:
   - For the frontend:
     ```bash
     npm install
     ```
   - For the backend:
     ```bash
     pip install -r requirements.txt
     ```

4. **Configuration**

- **Environment Variables**:
  - Create a `.env` file in the root directory and include necessary API keys and configurations.

5. **Start the Server**:
   - For the frontend:
     ```bash
     npm start
     ```
   - For the backend:
     ```bash
     flask run
     ```

6. **Access the App**:
   - Visit `http://localhost:3000` for the frontend.
   - Visit `http://localhost:5000` for the backend.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## FAQ

**Q: How can I reset my API keys?**
A: Update the `.env` file with new API keys and restart the server.

**Q: Where can I find the API documentation?**
A: API documentation is included in the `README.md` under the [Weather API](#weather-api) section.

## Changelog

**v1.0.0** - Initial release.

## Known Issues

- **Issue**: Occasionally, the app may experience delays in data retrieval.
- **Solution**: This is under review; future updates will address performance optimizations.
