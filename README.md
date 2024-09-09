# WeatherMaster

## Description

WeatherMaster aims to offer a smooth, ad-free experience while providing precise and timely weather information. The app aggregates data from multiple weather sources to ensure accurate forecasts.

## Features
- **Backend Server**: Developed with Flask to process requests, handle logic, and communicate with external APIs. Handles API requests and integrates with third-party weather APIs.
- **Frontend**: Built with React.js to handle user interactions, interface design, and display data. The user interface communicates with the backend server and presents weather data to users. 
- **APIs**: Routes for retrieving weather information, user preferences, and event management.
- **Cache**: Redis for faster data retrieval and improving response times.
- **Load Balancer**: Distributes user requests to multiple server instances to enhance performance and availability.
- **Proxy**: Server-side proxy setup to handle API requests and overcome CORS issues.
- **Monitoring and Logging**: Tools for tracking application health and performance.
- **CI/CD Pipeline**: Automated testing, building, and deployment via tools like Circle CI.

## User Experience

- **Localized Alerts**: Timely notifications for weather changes.

## Environment

- Node.js (v14.x or later)
- NPM or Yarn
- Docker (optional, for containerization)

## Requirement

**Frontend**
- React.js
- Axios
- Recharts

**Backend**
- Flask
- SQLAlchemy
- Celery

**Infrastructure**
- Heroku
- Redis
- PostgreSQL

**Testing and Automation**
- Jest
- Pytest
- Selenium
- CircleCI Continuous Integration / Continuous Deployment (CI/CD)

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

## Technology Stack

### Frontend
- **React.js**: For dynamic user interfaces.
- **Axios**: For API communication.
- **Recharts**: For data visualization.

### Backend
- **Flask**: Lightweight web framework for server-side logic.
- **SQLAlchemy**: ORM for database interactions.
- **Celery**: For asynchronous task management.

### Infrastructure
- **Heroku**: For cloud deployment and hosting.
- **Redis**: In-memory data store for Celery message brokering.
- **PostgreSQL**: Scalable relational database.

### Testing and Automation
- **Jest**: For unit testing React components.
- **Pytest**: For backend testing.
- **Selenium**: For end-to-end testing.
- **Circle CI**: For CI/CD automation.

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
