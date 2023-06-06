
export default async function HandleSearch(searchTerm: (string | undefined)) {
    var weatherData: any = await getWeather(searchTerm);
    var forecastData: any = await getForecast(searchTerm);




    return { weatherData, forecastData }
};

function getWeather(searchTerm: (string | undefined)) {
    return fetch(`http://localhost:3000/weather/city/${searchTerm}/FR`)
        .then(response => response.json())
        .then((response) => {
            if (response.success === false) {
                console.log("Erreur lors de la récupération des données météo");
                return;
            }
            return response.data;
        })
}

function getForecast(searchTerm: (string | undefined)) {
    return fetch(`http://localhost:3000/forecast/city/${searchTerm}/FR`)
        .then(response => response.json())
        .then((response) => {
            if (response.success === false) {
                console.log("Erreur lors de la récupération des données météo");
                return;
            }
            return response.data;
        })
}