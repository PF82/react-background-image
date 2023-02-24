import "./App.css";
import { useState, useEffect } from "react";

const api = {
  key: "",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${api.base}weather?q=London,uk&units=metric&APPID=${process.env.REACT_APP_API_KEY}`);
        const json = await response.json();
        console.log(json.weather[0].id);
        setWeather(json.weather[0].id);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {weather}
      </header>
    </div>
  );
}

export default App;

// const result = await fetch(`${process.env.REACT_APP_API_URL}/weather/?q=london&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)

// function App() {
//   const [advice, setAdvice] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.adviceslip.com/advice');
//         const json = await response.json();
//         console.log(json.slip.advice);
//         setAdvice(json.slip.advice);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         {advice}
//       </header>
//     </div>
//   );
// }