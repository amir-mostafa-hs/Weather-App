const cityForm = document.querySelector("form");

const updateCityCard = async (cityName) => {
  const cityDetails = await getCityInformationData(cityName);
  const weatherDetails = await getWeatherInformationData(cityDetails.Key);

  return { cityDetails: cityDetails, weatherDetails: weatherDetails };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityName = cityForm.city.value.trim();
  cityForm.reset();
  updateCityCard(cityName)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});
