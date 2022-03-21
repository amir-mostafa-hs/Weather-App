const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");

const updateUI = (data) => {
  const cityDetails = data.cityDetails;
  const weatherDetails = data.weatherDetails;

  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weatherDetails.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weatherDetails.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  card.classList.contains("d-none") && card.classList.remove("d-none");
};

const updateCityCard = async (cityName) => {
  const cityDetails = await getCityInformationData(cityName);
  const weatherDetails = await getWeatherInformationData(cityDetails.Key);

  return { cityDetails, weatherDetails };
};

cityForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const cityName = cityForm.city.value.trim();
  cityForm.reset();
  updateCityCard(cityName)
    .then((data) => updateUI(data))
    .catch((error) => console.error(error));
});
