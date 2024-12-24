onst apiKey = '186c6391b1aabe5faaef6af56dfcb2fd'; // Replace with your OpenWeatherMap API key

document.getElementById('fetchWeatherBtn').addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;
    fetchWeather(location);
});

function fetchWeather(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Location not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            document.getElementById('weatherResult').innerText = error.message;
        });
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    const temperature = data.main.temp;
    const conditions = data.weather[0].description;
    const city = data.name;

    weatherResult.innerHTML = `
        <h2>Weather in ${city}</h2>
        <p>Temperature: ${temperature} °C</p>
        <p>Conditions: ${conditions}</p>
    `;
}