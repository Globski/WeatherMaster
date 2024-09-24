import React from "react"; // Import React
import "./Home.css"; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home">
      {" "}
      {/* Main home section */}
      <h1>Weather Updates</h1> {/* Main title */}
      <p>
        Stay Ahead of the Weather with Real-Time
        <br />
        Data at Your Fingertips
      </p>
      <button className="weather-button">WeatherMaster</button>{" "}
      {/* Call to action button */}
    </div>
  );
};

export default Home; // Export the Home component
