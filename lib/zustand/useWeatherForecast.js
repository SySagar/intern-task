import { create } from "zustand";

const useWeatherForecast = create((set) => ({
  foreCast: [],
  weatherForecast: {
    minTemp: "",
    maxTemp: "",
    weatherDescription: "",
    weatherIcon: "",
  },
  setWeatherForecast: (weather) => {
    set({ weatherForecast: weather });
  },
}));

export default useWeatherForecast;
