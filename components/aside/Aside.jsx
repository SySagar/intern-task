import { useEffect } from "react";
import { APIMethods } from "@/lib/axios/api";
import useWeatherInfo from "@/lib/hooks/useWeatherInfo";
import Image from "next/image";
import { useState } from "react";
import Forecast from "./Forecast";
import useLocationSearch from "@/lib/hooks/useLocationSearch";

export default function Aside() {
  const [searchItem , setSearchItem] = useLocationSearch((state) => [state.searchItem, state.setSearchItem]);
  const [days, setDays] = useState(5);
  const [icon, setIcon] = useState("");

  const changeDays = (id) => {
    setDays(id);
  };

  const [
    location,
    currentTemp,
    windSpeed,
    weatherDescription,
    weatherIcon,
    humidity,
    pressure,
    setCurrentTemp,
    setWindSpeed,
    setWeatherDescription,
    setWeatherIcon,
    setHumidity,
    setPressure,
    setLocation,
  ] = useWeatherInfo((state) => [
    state.location,
    state.currentTemp,
    state.windSpeed,
    state.weatherDescription,
    state.weatherIcon,
    state.humidity,
    state.pressure,
    state.setCurrentTemp,
    state.setWindSpeed,
    state.setWeatherDescription,
    state.setWeatherIcon,
    state.setHumidity,
    state.setPressure,
    state.setLocation,
  ]);

  useEffect(() => {
    const getWeatherDetails = async () => {
      return await APIMethods.weather.getWeather(searchItem);
    };

    try {
      getWeatherDetails().then((res) => {

        if(res){

          setCurrentTemp(res.data.main.temp);
          setWindSpeed(res.data.wind.speed);
          setWeatherDescription(res.data.weather[0].description);
          setWeatherIcon(res.data.weather[0].icon);
          setHumidity(res.data.main.humidity);
          setPressure(res.data.main.pressure);
          setLocation(res.data.coord.lat, res.data.coord.lon);
        }
      });
      
    } catch (error) {
      console.log(error);
    }


  }, [searchItem]);

  const handleChange = (e) => {
   setSearchItem(e.target.value);
  };

  return (
    <div className="h-full w-full bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 p-9">
      <form class="flex items-center">
        <label for="simple-search" class="sr-only">
          Search
        </label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type='search'
            id="simple-search"
            // onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                setSearchItem(e.target.value);
              }}
            }
            class="bg-gray-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
        </div>
      </form>

      <div className="justify-center items-center text-center py-6">
        <p className="text-white" style={{ fontSize: "60px" }}>{currentTemp}°C</p>
        <div className="flex flex-row gap-2 text-gray-300 justify-center items-center text-center">
          <Image src={`assets/svg/${weatherIcon}.svg`} width={20} height={20} alt="" />
          <p style={{ fontSize: "16px" }}>{weatherDescription}, {windSpeed}km/h</p>
        </div>
      </div>
      <hr className="h-px bg-gray-500 border-0 dark:bg-gray-700"></hr>

      <div className="weather-params py-6">
        <div className="flex flex-row  items-center">
          <div className="flex relative flex-col items-center w-full transition ease-in-out duration-500 hover:scale-105">
            <Image
              width={40}
              height={40}
              src="assets/svg/humidity-light.svg"
              alt="humidity"
            />
            <p className="text-xl text-white">humidity</p>
            <p className="text-xl text-white">{humidity}%</p>
          </div>

          <div className="flex relative flex-col items-center w-full transition ease-in-out duration-500 hover:scale-105">
            <Image
              width={40}
              height={40}
              src="assets/svg/wind-light.svg"
              alt="wind"
            />
            <p className="text-xl text-white">pressure</p>
            <p className="text-xl text-white">{pressure}</p>
          </div>
        </div>
      </div>

      <div className="next-days flex flex-col justify-center items-center mt-4 gap-5">
        <p className="text-2xl text-white">The next days forecast</p>

        <div className="flex flex-row mt-2">
          <button
            id="5"
            type="button"
            onClick={(e) => changeDays(e.target.id)}
            class="text-white p-2 focus:outline-none hover:bg-gray-600  focus:bg-gray-400 font-semibold rounded-lg text-md px-5  mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            5 days
          </button>

          <button
            id="7"
            type="button"
            onClick={(e) => changeDays(e.target.id)}
            class="text-white p-2 focus:outline-none hover:bg-gray-600  focus:bg-gray-400 font-semibold rounded-lg text-md px-5  mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            1 week
          </button>

          <button
            id="15"
            type="button"
            onClick={(e) => changeDays(e.target.id)}
            class="text-white p-2 focus:outline-none hover:bg-gray-600  focus:bg-gray-400 font-semibold rounded-lg text-md px-5  mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            15 days
          </button>
        </div>
        {/* {console.log(days)} */}
        {days === 5 && <Forecast days={days} />}
        {days === 7 && <div>day 2</div>}
        {days === 15 && <div>day 3</div>}
      </div>
    </div>
  );
}
