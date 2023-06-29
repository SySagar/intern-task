/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { APIMethods } from "@/lib/axios/api";
import getClimateIcon from "@/lib/utils/climateIcon";
import useLocationSearch from "@/lib/hooks/useLocationSearch";

export default function Forecast({ days }) {
  const [weatherForecast, setWeatherForecast] = useState([]);
  const [searchItem] = useLocationSearch((state) => [state.searchItem]);
  const [icon, setIcon] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // handleCounter();
    const getWeatherForecast = async () => {
     const weatherData =  (await APIMethods.weather.getWeatherForecast(searchItem)).data.list;
    //  console.log(weatherData);
           setWeatherForecast((weatherForecast) => [
        ...weatherForecast,
        weatherData,
      ]);
            const weatherIcon = weatherData[0].weather[0].icon;
      const climateicon = getClimateIcon(weatherIcon);
      setIcon(climateicon);
      setLoading(true);
    };

      getWeatherForecast();


    // getWeatherForecast().then((res) => {
    //   setWeatherForecast((weatherForecast) => [
    //     ...weatherForecast,
    //     res.data.list,
    //   ]);
    //   console.log(res);
    //   const weatherIcon = res.data.list[0].weather[0].icon;
    //   const climateicon = getClimateIcon(weatherIcon);
    //   setIcon(climateicon);
    //   setLoading(true);
    // });
  }, [searchItem]);

  return (
    <div className="flex flex-col overflow-y-scroll max-h-56 grow">
      {loading &&
        weatherForecast.slice(0, days).map((item, idx) => (
          <div className="p-4 flex w-full relative">
            <div className="forecast-item flex flex-row text-white gap-2">
              <div className="icon rounded-lg backdrop-blur-lg p-2">
             
                <Image
                  className=""
                  src={`assets/svg/${item[idx].weather[0].icon}.svg`}
                  alt="Weather Icon"
                  width={30}
                  height={30}
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-lg">Friday, April 21</p>
                <p className="text-sm text-gray-400">
                  {item[idx].weather[0].description}
                </p>
              </div>

              <div className="flex  border-[1px] bg-[rgba(255,255,255,0.5)] ml-8"></div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm">{item[idx].main.temp_max}°C</p>
                <p className="text-sm">{item[idx].main.temp_min}°C</p>
              </div>
            </div>
          </div>
        ))}
      {!loading && (
        <div role="status">
          <svg
            aria-hidden="true"
            class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
}
