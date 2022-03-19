const apiAccessKey = "ZYzLdD15D8yt8xipKhC9Mo8fdaCTMV9o";

const getWeatherInformationData = async (id) => {
  const baseUrl = `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${apiAccessKey}`;
  const response = await (await fetch(baseUrl)).json();
  return response[0];
};

const getCityInformationData = async (cityName) => {
  const baseUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiAccessKey}&q=${cityName}`;
  const response = await (await fetch(baseUrl)).json();
  return response[0];
};
getCityInformationData("esfahan")
  .then((data) => getWeatherInformationData(data.Key))
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
