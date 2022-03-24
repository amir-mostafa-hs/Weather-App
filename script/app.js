// !Get Element With QuerySelector
const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
// !Function For Update UI Data
const updateUI = (data) => {
  const { cityDetails, weatherDetails } = data;
  // !Details Element Update
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weatherDetails.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weatherDetails.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>`;
  // !Show Weather Icon
  const iconSrc = `./images/icons/${weatherDetails.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);
  // !Show Status Of The Day
  const timeSrc = weatherDetails.IsDayTime
    ? "./images/day.svg"
    : "./images/night.svg";
  time.setAttribute("src", timeSrc);
  // !Show Card
  card.classList.contains("d-none") && card.classList.remove("d-none");
};
// !Get Data From forecast.js File
const getDataUpdateCityCard = async (cityName) => {
  const cityDetails = await getCityInformationData(cityName);
  const weatherDetails = await getWeatherInformationData(cityDetails.Key);
  return { cityDetails, weatherDetails };
};
// !Add Submit Event Listener To Form
cityForm.addEventListener("submit", (evt) => {
  // !Disable Default Behavior
  evt.preventDefault();
  // !Get Input Value
  const cityName = cityForm.city.value.trim();
  cityForm.reset();
  getDataUpdateCityCard(cityName)
    .then((data) => updateUI(data))
    .catch((error) => console.error(error));
});
