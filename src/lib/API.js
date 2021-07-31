const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '';
const WEATHER_API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`;
const ADDRESS_API_URL = `${proxy}https://darksky.net/rgeo?hires=1`;

function getCoordinates(location) {
    return fetch(`${GEO_API_URL}${location}`)
        .then(response => response.json());
}

function getForecast(lat, long) {
    return fetch(`${WEATHER_API_URL}${lat},${long}`)
        .then(response => response.json());
}

function getAddress(lat, long) {
    return fetch(`${ADDRESS_API_URL}&lat=${lat}&lon=${long}`)
        .then(response => response.json());
}

function getEmbedURL(lat, long) {
    return `https://maps.darksky.net/@emoji,${lat},${long},11?domain="+encodeURIComponent(window.location.href)+"&auth=1525213550_b5fc128e7789bb56048952cc704c8473&embed=true&amp;timeControl=false&amp;fieldControl=false&amp;defaultField=emoji`;
}

export default {
    getAddress,
    getForecast,
    getCoordinates,
    getEmbedURL,
};