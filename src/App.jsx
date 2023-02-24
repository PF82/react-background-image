import "./App.css";
import { useState, useEffect } from "react";

import zero from '../src/img/world-map2.jpg';
import one from '../src/img/thunderstorm.jpg';
import two from '../src/img/shower-rain.jpg';
import three from '../src/img/rain.jpg';
import four from '../src/img/snow.jpg';
import five from '../src/img/fog.jpg';
import six from '../src/img/clear-sky.jpg';
import seven from '../src/img/few-clouds.jpg';
import eight from '../src/img/scattered-clouds.jpg';
import nine from '../src/img/broken-clouds.jpg';

function App() {
  const [weather, setWeather] = useState("");
  // create a new state (weatherImg) to save the image
  const [weatherImg, setWeatherImg] = useState(zero); // image 'one' by default

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/weather/?q=porto&units=metric&APPID=${process.env.REACT_APP_API_KEY}`);
        const json = await response.json();
        console.log(json);
        setWeather(json.weather[0].id);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!weather[0]) {
      // 1. confirm if the weather object has a property called weather
      // 2. it has to be confirmed before running the other if statements
      // 3. for example, if the weather obj is undefined, when it starts searching for weather[0]
      // it's like searching undefined property weather and then it crashes

      if (weather >= 200 && weather <= 232) {
        // setWeatherImg = one; or
        setWeatherImg(one);
      } else if ((weather >= 300 && weather <= 321) || (weather >= 520 && weather <= 531)) {
        setWeatherImg(two);
      } else if (weather >= 500 && weather <= 504) {
        setWeatherImg(three);
      } else if ((weather >= 600 && weather <= 622) || (weather === 511)) {
        setWeatherImg(four);
      } else if (weather >= 701 && weather <= 781) {
        setWeatherImg(five);
      } else if (weather === 800) {
        setWeatherImg(six);
      } else if (weather === 801) {
        setWeatherImg(seven);
      } else if (weather === 802) {
        setWeatherImg(eight);
        // } else if (weather === 803 && weather === 804) {
        //   setWeatherImg(nine);
      } else {
        setWeatherImg(nine);
      }
    }
  }, [weather]);

  return (
    <div className='container-0' style={{
      backgroundImage: `url(${weatherImg})`,
      backgroundPosition: 'center',
      backgroundSize: '100% 100%', // instead of cover
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
    }}>
      <header className="container-1">
        {/* change city name in API link above */}
        {weather}
      </header>
    </div>
  );
}

export default App;