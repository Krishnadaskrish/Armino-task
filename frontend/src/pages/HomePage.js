import React, { useContext } from "react";
import WeatherSearch from "../Components/Weatherserch";
import { appData } from "../Context/Data";

function HomePage() {
  let { weatherData } = useContext(appData);
  console.log(weatherData, "lllll");
  return (
    <>
      <WeatherSearch />
      <div className="flex items-center justify-center h-screen bg-blue-100">
        <div className="flex bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl space-x-4">
          <div className="text-center flex flex-col items-center justify-center w-1/3">
            {weatherData.imageUrl && (
              <img src={weatherData.imageUrl} alt="Weather" className="mb-4" />
            )}
            <div className="text-6xl">{weatherData.temperature.temp}°C</div>
            <div className="text-xl text-gray-700">
              {weatherData.weather[0].main}
            </div>
            <div className="text-gray-600">{weatherData.name}</div>
            <div className="text-gray-600">{weatherData.createdAt}</div>
            <div className="text-gray-600">
              Feels like {weatherData.temperature.feels_like}°C | Sunset{" "}
              {weatherData.sunTimeDetails.sunset}
            </div>
          </div>

          <div className="p-4 bg-gray-100 bg-opacity-50 rounded shadow w-1/3">
            <div className="grid grid-cols-2 gap-4">
              {[
                { time: "Now", temp: "25°C" },
                { time: "2 AM", temp: "25°C" },
                { time: "3 AM", temp: "23°C" },
                { time: "4 AM", temp: "22°C" },
                { time: "5 AM", temp: "20°C" },
                { time: "6 AM", temp: "25°C" },
                { time: "7 AM", temp: "25°C" },
                { time: "8 AM", temp: "23°C" },
                { time: "9 AM", temp: "22°C" },
                { time: "10 AM", temp: "20°C" },
              ].map((forecast, index) => (
                <div key={index} className="text-center p-2">
                  <div className="text-gray-700">{forecast.time}</div>
                  <div className="text-gray-600">{forecast.temp}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-gray-500 text-sm w-1/3 flex items-center justify-center">
            Improve him believe opinion offered met and end cheered forbade.
            Friendly as stronger speedily by recurred. Son interest wandered sir
            addition end say. Manners beloved affixed picture men ask.
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
