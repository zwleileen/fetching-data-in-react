// src/services/weatherService.js

const API_KEY = "70b2f476e6ac4e8f94b23352252101";
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

async function show(city) {
  //? modify the URL
  const url = `${BASE_URL}&q=${city}&aqi=no`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

export { show };
