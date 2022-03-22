// ! API Access Key Value
const apiAccessKey = "ZYzLdD15D8yt8xipKhC9Mo8fdaCTMV9o";
// !Function For Get Weather Details
const getWeatherInformationData = async (id) => {
  const baseUrl = `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${apiAccessKey}`;
  const response = await (await fetch(baseUrl)).json();
  return response[0];
};
// !Function For Get City Information
const getCityInformationData = async (cityName) => {
  const baseUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiAccessKey}&q=${cityName}`;
  const response = await (await fetch(baseUrl)).json();
  return response[0];
};
// !the following code is for testing functions
// getCityInformationData("esfahan")
//   .then((data) => getWeatherInformationData(data.Key))
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));
