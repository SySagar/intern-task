import { create } from "zustand";

const useWeatherInfo = create((set) => ({
  currentTemp: "",
  location: {
    latitude: "",
    longitude: "",
  },
  windSpeed: "",
  weatherDescription: "",
  weatherIcon: "",
  humidity: "",
  pressure: "",
  setCurrentTemp: (temp) => set({ currentTemp: temp }),
  setWindSpeed: (speed) => set({ windSpeed: speed }),
  setWeatherDescription: (description) =>set({ weatherDescription: description }),
  setWeatherIcon: (icon) => set({ weatherIcon: icon }),
  setHumidity: (humidity) => set({ humidity: humidity }),
  setPressure: (pressure) => set({ pressure: pressure }),
  setLocation: (latitude, longitude) => set({ location: { latitude: latitude, longitude: longitude } }),
}));

export default useWeatherInfo;
