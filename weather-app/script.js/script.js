// Generating Current date
function getDayOfWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayIndex = currentDate.getDay();
    return daysOfWeek[dayIndex];
}
const day = document.querySelector(".day");
const dayOfWeek = getDayOfWeek();
day.textContent = dayOfWeek;

// Generating Weather Icon
function getWeatherIcon(condition) {
    switch (condition) {
        case 'Clear':
            return 'wi-day-sunny';
        case 'Partly-cloudy':
            return 'wi-day-cloudy';
        case 'Mostly-cloudy':
            return 'wi-cloudy';
        case 'Overcast':
            return 'wi-day-sunny-overcast';
        case 'Clouds':
            return 'wi-cloudy';
        case 'Scattered-clouds':
            return 'wi-day-cloudy';
        case 'Broken-clouds':
            return 'wi-day-cloudy';
        case 'Few-clouds':
            return 'wi-day-cloudy';
        case 'Thin-clouds':
            return 'wi-cloud';
        case 'Thick-clouds':
            return 'wi-cloudy';
        case 'Light-rain':
            return 'wi-day-showers';
        case 'Moderate-rain':
            return 'wi-day-rain';
        case 'Heavy-rain':
            return 'wi-rain';
        case 'Drizzle':
            return 'wi-sprinkle';
        case 'Showers':
            return 'wi-showers';
        case 'Thunderstorms':
            return 'wi-thunderstorm';
        case 'Snow':
            return 'wi-snow';
        case 'Mist':
            return 'wi-day-fog';
        default:
            return 'wi-day-sunny';
    }
}

// Adding Weather Icon and Degree
const addWeatherIcon = (icon, degree) => {
    const iconElement = document.querySelector('.weatherIcon');
    const degreeElement = document.querySelector('.degree');

    const weatherIconName = getWeatherIcon(icon);
    degreeElement.textContent = degree;
    iconElement.classList.add(weatherIconName);
} 
const fetchWeatherLocation = (cityName) =>{
    // API Variables
    const apiKey = 'OpenWeatherApi';
    const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather`;
    const url = `${openWeatherUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

    // Fetching weather Data
    fetch(url)
        .then(response => {
            if (!response.ok)
                throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            setTimeout(addWeatherIcon( data.weather[0].main, data.main.temp),200);
            
            console.log(data);
        })
        .catch((error) => {
            console.error('Error fetching data: ' + error);
        });

}
// EventLister on form
const form = document.querySelector("#form");
form.addEventListener('submit', e => {

    e.preventDefault();
    const locationInput = document.querySelector("#location");
    const city = document.querySelector(".city");
    
    // Setting the Location and Clearing the form
    const locationValue = locationInput.value;
    const cityName = locationValue;
    fetchWeatherLocation(cityName);
    city.textContent = locationValue;
    form.reset();
})
