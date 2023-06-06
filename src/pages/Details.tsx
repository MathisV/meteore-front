import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HandleSearch from '../middleware/HandleSearch'; // Assurez-vous que c'est le bon chemin
import Weather from '../components/Weather';
import Forecast from '../components/Forecast';

const DetailsPage: React.FC = () => {
    const { searchTerm } = useParams();
    const [data, setData] = useState<{ weatherData: any, forecastData: any } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            console.log("Recherche de", searchTerm);
            const result = await HandleSearch(searchTerm);
            setData(result);
            console.log(result);
            if (result.weatherData == null || result.forecastData == null) {
                console.log("Erreur lors de la récupération des données météo");
                return;
            } else {
                console.log("Données météo :", result.weatherData);
                console.log("Prévision météo :", result.forecastData);
                setLoading(false);
            }
        };

        fetchData();
    }, [searchTerm]);

    if (loading) {
        return <div>Chargement...</div>; // Vous pouvez afficher un indicateur de chargement ici
    }

    return (
        <div>
            <h1>Prévisions pour {searchTerm}</h1>
            {data && (
                <div>
                    <Weather data={data.weatherData} />
                    <Forecast data={data.forecastData} />
                </div>
            )}
        </div>
    );
};

export default DetailsPage;
