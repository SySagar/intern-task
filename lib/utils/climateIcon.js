const getClimateIcon = (climate) => {

  let background = "";
  let backgroundCover = "";

  switch (climate) {
    case "01d":
      background = "/assets/jpg/clear-sky.jpg";
      break;
    case "01n":
      background = "/assets/jpg/clear-sky-night.jpg";
      break;
    case "02d":
      background = "/assets/jpg/few-clouds.jpg";
      break;
    case "02n":
      background = "/assets/jpg/few-clouds.jpg";
      break;
    case "03d":
      background = "/assets/jpg/cloudy.jpg";
      break;
    case "03n":
      background = "/assets/jpg/cloudy-night.jpg";
      break;
    case "04d":
      background = "/assets/jpg/cloudy.jpg";
      break;
    case "04n":
      background = "/assets/jpg/cloudy-night.jpg";
      break;
    case "10d":
      background = "/assets/jpg/rainy.jpg";
      break;
    case "10n":
      background = "/assets/jpg/rainy-night.jpg";
      break;
    case "09d":
      background = "/assets/jpg/drizzle.jpg";
      break;
    case "09n":
      background = "/assets/jpg/drizzle-night.jpg";
      break;
    case "13d":
      background = "/assets/jpg/snow.jpg";
      break;
    case "13n":
      background = "/assets/jpg/snow-night.jpg";
      break;
    case "11d":
      background = "/assets/jpg/thunderstorm.jpg";
      break;
    case "11n":
      background = "/assets/jpg/thunderstorm.jpg";
      break;
    case "50d":
      background = "/assets/jpg/windy.jpg";
      break;
    case "50n":
      background = "/assets/jpg/windy-night.jpg";
      break;
  }
  backgroundCover = background.replace(".jpg", "-small.jpg");
  return {
    background,
    backgroundCover,
  };
};

export default getClimateIcon;
