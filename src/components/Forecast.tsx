import React from 'react';
import Card from './Card';

type ForecastProps = {
    data: {
        date: string,
        temperature: number,
        humidity: number,
        description: string,
        icon: string
    }[]
}

const Forecast: React.FC<ForecastProps> = ({ data }) => {

    return (
        <div>
            <h2>Prévisions météo</h2>
            {data.map((forecast, index) => (
                <Card
                    key={index}
                    title={forecast.date}
                    value={`${forecast.temperature}°C`}
                    icon={`https://openweathermap.org/img/wn/${forecast.icon}@2x.png`}
                    valueMin={`${forecast.humidity}%`}
                    valueMax={forecast.description}
                />
            ))}
        </div>
    );
};

export default Forecast;
