import React from 'react';
import Card from './Card';
import icon_soleil from '../img/icon_soleil.png';
import icon_precipitation from '../img/icon_pluie.png';
import icon_humidite from '../img/icon_humidite.png';
import CenteredMap from './CenteredMap';

type WeatherProps = {
    data: {
        city: string,
        lon: any,
        lat: any,
        countryCode: string,
        message: string,
        success: boolean,
        sunriseAt: number,
        sunsetAt: number,
        data: {
            temperature: number,
            pressure: number,
            humidity: number,
            windSpeed: number,
            description: string,
            icon: string
        }
    }
}

const Weather: React.FC<WeatherProps> = ({ data }) => {

    return (
        <div>
            <h2>Météo actuelle</h2>
            <CenteredMap lon={data.lon} lat={data.lat}></CenteredMap>
            <Card
                title="Température"
                value={`${data.data.temperature}°C`}
                icon={`https://openweathermap.org/img/wn/${data.data.icon}@2x.png`}
                valueMin=""  // Vous pouvez remplir ces valeurs si vous en avez
                valueMax=""
            />
            <Card
                title="Pression"
                value={`${data.data.pressure} hPa`}
                icon={icon_soleil}
                valueMin=""
                valueMax=""
            />
            <Card
                title="Humidité"
                value={`${data.data.humidity}%`}
                icon={icon_humidite}
                valueMin=""
                valueMax=""
            />
            <Card
                title="Vitesse du vent"
                value={`${data.data.windSpeed} m/s`}
                icon={icon_soleil}
                valueMin=""
                valueMax=""
            />
            <Card
                title="Description"
                value={data.data.description}
                icon={icon_soleil}
                valueMin=""
                valueMax=""
            />
        </div>
    );
};

export default Weather;
