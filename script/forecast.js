const apiAccessKey = "ZYzLdD15D8yt8xipKhC9Mo8fdaCTMV9o";

const getCityWeatherData = async (cityName) => {
  const baseUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiAccessKey}&q=${cityName}`;
  const response = await (await fetch(baseUrl)).json();
  return response[0];
};
getCityWeatherData("esfahan")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
