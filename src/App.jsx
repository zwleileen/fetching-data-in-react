import { useState } from "react";
import { show } from "./services/weatherService";
import { useEffect } from "react";
//? Copied the using fetch from MDN

//? call the function -> check the network tab

const App = () => {
  const [weather, setWeather] = useState("???");

  useEffect(() => {
    const fetchTaipei = async() => {
      const taipei = await show('Taipei')
        setWeather(taipei.current.temp_c);
    };
      fetchTaipei();
    }, []);

  const handleClick = async () => {
    const data = await show("London");
    console.log("data", data);
    setWeather(data.current.temp_c);
  };
  return (
    <>
      <p>Weather:{weather} </p>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default App;
