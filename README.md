# WeatherMaster

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Weather Display Interface](https://github.com/user-attachments/assets/f38fe372-d059-46c9-b4a2-5d40e2b255b4)

## Description

WeatherMaster is a weather-tracking application that provides users with weather-related data. It is built using React for the frontend, Flask for the backend API, and Redis for caching to improve performance. WeatherMaster offers a smooth, ad-free way to get up-to-date, reliable weather information, providing current weather, short-term, and long-term forecasts.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Environment](#environment)
- [Requirements](#requirements)
- [API Endpoints](#api-endpoints)
- [Technology Stack](#technology-stack)
- [Caching and Background Tasks](#caching-and-background-tasks)
- [How to Use](#how-to-use)
- [Installation](#installation)
- [Usage/Examples](#usageexamples)
- [Contributing](#contributing)
- [License](#license)
- [FAQ](#faq)
- [Acknowledgments](#acknowledgments)
- [Authors](#authors)
- [Documentation](#documentation)


## Features

- **Current Weather**: Shows real-time weather conditions.
- **Hourly Forecast**: Provides weather forecasts for the next 24 hours.
- **Daily Forecast**: Displays weather forecasts for up to 10 days.
- **Home Section**: Displays a welcoming message.
- **Offer Section**: Shows the offers provided by WeatherMaster.
- **Track Section**: Allows users to track their weather data.
- **Sign-up Section**: Provides an option for users to sign up for weather updates.
- **About Section**: General information about WeatherMaster.
- **Contact Section**: Contains contact information, linked to the footer.
- **Footer**: Includes Privacy Policy and Terms & Conditions.
- **Light/Dark Mode Toggle**: Users can switch between themes.
- **Live Previews**: View weather changes in real-time.
- **Fullscreen Mode**: Expand the app to full-screen for better visibility.
- **Cross Platform**: Accessible on multiple devices.


## Environment

- Node.js (for React)
- Python 3.x (for Flask)
- Redis (for caching)
- npm (comes with Node.js)
- pip (comes with Python)

## Requirements

- Flask
- Flask-CORS
- Redis
- JSON



## API Endpoints

**GET /api/data:** Returns the weather data for all sections in JSON format.

```json
{
   "home": "Welcome to WeatherMaster",
   "offer": "Here are our offerings",
   "track": "Track your weather data",
   "signup": "Sign up for weather updates",
   "about": "About WeatherMaster"
}
```

- **GET /api/weather**
  - Parameters: `city`, `postal_code`, `latitude`, `longitude`
  - Response: JSON object with current weather, hourly, and 7-day forecast.

Example request:
```bash
GET /api/weather?city=New York
```

Response:
```json
{
  "location": "New York",
  "current": {
    "temp": "20°C",
    "humidity": "65%"
  },
  "forecast": [...]
}
```

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

## Technology Stack
![React](https://img.shields.io/badge/React-16.13.1-blue?logo=react)
![Flask](https://img.shields.io/badge/Flask-2.0.1-green?logo=flask)
![Redis](https://img.shields.io/badge/Redis-6.2.5-red?logo=redis)
![CSS](https://img.shields.io/badge/CSS-3.0-1572B6?logo=css3)
![Node.js](https://img.shields.io/badge/Node.js-14.17.0-green?logo=nodedotjs)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13.3-blue?logo=postgresql)

### Frontend
- **React.js**: A JavaScript library for building user interfaces.
- **CSS**: For styling the web pages.
- **Axios**: For API communication.
- **Recharts**: For data visualization.

### Backend
- **Flask**: Lightweight web framework for Python. Flask application (Flux Server) managing weather data requests and interactions with the database.
- **Flask-CORS**: For handling cross-origin requests between React and Flask.
- **SQLAlchemy**: ORM for database interactions.
- **Celery**: For managing asynchronous tasks. Managed by cron jobs, fetching new weather data periodically

### Infrastructure
- **Heroku**: For cloud deployment and hosting.
- **Redis**: Used to cache frequently requested weather information.
- **Database**: PostgreSQL for storing weather data.

### Testing and Automation
- **Jest**: For unit testing React components.
- **Pytest**: For backend testing.
- **Selenium**: For end-to-end testing.
- **CircleCI**: For CI/CD automation.

## Caching and Background Tasks

- **Redis**: Used for caching weather data to improve response times for repeated requests.
- **Cron Jobs**: Scheduled tasks fetch and process data from the external weather API periodically.

## How to Use

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
   - Create a `.env` file in the root directory and include necessary API keys and configurations.
   - Set up environment variables for API keys and database:
   ```bash
   export FLUX_API_KEY=your-api-key
   export DATABASE_URL=postgresql://user:password@localhost:5432/weather_db
   ```

5. **Run Migrations**:
   ```bash
   flask db upgrade
   ```

6. **Start the Server**:
   - For the frontend:
     ```bash
     npm start
     ```
   - For the backend:
     ```bash
     flask run
     ```

7. **Access the App**:
   - To retrieve weather data, navigate to the app at `http://localhost:5000`. 
   - Visit `http://localhost:5000` for the backend.

  Example request:
   ```bash
   GET /api/weather?city=London
   ```
You can search for weather forecasts by city name, postal code, or coordinates for the frontend.

## Installation

Install my-project with npm

```bash
npm install my-project
cd my-project
```

## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```

To run this project, you will need to add the following environment variables to your .env file:

- `API_KEY`
- `ANOTHER_API_KEY`

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

WeatherMaster is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## FAQ

#### Question 1
How can I reset my API keys?

**Answer**: Update the `.env` file with new API keys and restart the server.

#### Question 2
Where can I find the API documentation?

**Answer**: API documentation is included in the `README.md` under the [API Endpoints](#api-endpoints) section.

## Changelog

**v1.0.0** - Initial release.

## Acknowledgments

We would like to express our sincere gratitude to ALX Africa for providing the educational environment and guidance that enabled the development of WeatherMaster.

ALX Africa is a renowned full-stack software engineering program that prepares students for successful careers in the tech industry through project-based peer learning and a dedication to excellence. This project was created as part of the ALX Africa curriculum, and we want to acknowledge the institution for its invaluable support and resources.

For more information about ALX Africa and its programs, please visit their [website](https://www.alxafrica.com).

## Authors

- [@globski](https://www.github.com/globski)

## Documentation

[Documentation](https://linktodocumentation)

## Known Issues

- **Issue**: Occasionally, the app may experience delays in data retrieval.
- **Solution**: This is under review; future updates will address performance optimizations.

## Contact

Created by [Gloria Ogunsemore](https://www.linkedin.com/in/your-profile).
