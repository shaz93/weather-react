import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="weather-app">
          <header>
            <form id="search-form">
              <input
                type="search"
                placeholder="Enter a city.."
                required
                class="search-input"
                id="search-input"
              />
              <input type="submit" value="Search" class="search-button" />
            </form>
          </header>
          <main>
            <div class="current-weather">
              <div>
                <h1 class="current-city" id="current-city">
                  Paris
                </h1>
                <p class="current-details">
                  <span id="current-date"></span>, moderate rain <br />
                  Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
                </p>
              </div>
              <div class="current-temperature">
                <span class="current-temperature-icon">☀️</span>
                <span
                  class="current-temperature-value"
                  id="current-temperature"
                >
                  24
                </span>
                <span class="current-temperature-unit">°C</span>
              </div>
            </div>
          </main>
          <footer>
            <p>
              This project was coded by
              <a href="https://github.com/shaz93" target="_blank">
                Sheron Ndimande
              </a>{" "}
              and is
              <a href="https://github.com/shaz93/WeatherApp" target="_blank">
                {" "}
                on GitHub
              </a>{" "}
              and
              <a
                href="https://graceful-yeot-250b21.netlify.app"
                target="_blank"
              >
                hosted on Netlify
              </a>
            </p>
          </footer>
        </div>
      </header>
    </div>
  );
}

export default App;
