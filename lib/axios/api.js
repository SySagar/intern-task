import axios from "axios";

const state = "London";
const DailyAPIInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: { 'Content-Type': 'application/json'},
    params: {
        appid: process.env.NEXT_PUBLIC_API_KEY
    },
    units: "metric",
})

const ForecastAPIInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: { 'Content-Type': 'application/json'},
    params: {
        appid: process.env.NEXT_PUBLIC_API_KEY
    },
    units: "metric",
})

// const AuthorizedAPIInstance = axios.create({
// 	baseURL: process.env.NEXT_PUBLIC_API_URL,
//     headers: { 'Content-Type': 'application/json'},
//     withCredentials: true,
// })


const APIMethods = {
    weather: {
        getWeather: async (data) => {return await DailyAPIInstance.get(`/weather?q=${data}&appid=${process.env.NEXT_PUBLIC_API_KEY}`)},
        getWeatherForecast:  (data) => { return ForecastAPIInstance.get(`/forecast?q=${data}&appid=${process.env.NEXT_PUBLIC_API_KEY}`)},
    }
}

export  {APIMethods};