const getClimateIcon = (climate) => {

  let icon = "";

  switch (climate) {
    case "01d":
      icon = "/assets/svg/01d.svg";
      break;
    case "01n":
      icon = "/assets/svg/01n.svg";
      break;
    case "02d":
      icon = "/assets/svg/02d.svg";
      break;
    case "02n":
      icon = "/assets/svg/02n.svg";
      break;
    case "03d":
      icon = "/assets/svg/03d.svg";
      break;
    case "03n":
      icon = "/assets/svg/03n.svg";
      break;
    case "04d":
      icon = "/assets/svg/03d.svg";
      break;
    case "04n":
      icon = "/assets/svg/03n.svg";
      break;
    case "10d":
      icon = "/assets/svg/10d.svg";
      break;
    case "10n":
      icon = "/assets/svg/10n.svg";
      break;
    case "09d":
      icon = "/assets/svg/09d.svg";
      break;
    case "09n":
      icon = "/assets/svg/09n.svg";
      break;
    case "13d":
      icon = "/assets/svg/snow.svg";
      break;
    case "13n":
      icon = "/assets/svg/snow.svg";
      break;
    case "11d":
      icon = "/assets/svg/thunderstorm.svg";
      break;
    case "11n":
      icon = "/assets/svg/thunderstorm.svg";
      break;
    case "50d":
      icon = "/assets/svg/mist.svg";
      break;
    case "50n":
      icon = "/assets/svg/mist.svg";
      break;
  }
  return icon;
};

export default getClimateIcon;
