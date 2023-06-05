import * as React from 'react';
import { useState, useMemo } from 'react';
import { render } from 'react-dom';
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';
import Card from './Card';

interface City {
  city: string;
  temperature: number;
  humidity: string;
  image: string;
  latitude: number;
  longitude: number;
}


function MyMapComponent() {
  const [isLoading, setLoading] = useState(true);
  const [markers, setMarkers] = useState<any | null>(null);
  const [popupInfo, setPopupInfo] = useState<any | null>(null);

  var cities = ["Paris", "Lille", "Marseille", "Bordeaux", "Lyon", "Montpellier", "Toulouse", "Nantes", "Strasbourg", "Nice", "Brest",
    "Rennes", "Reims", "Toulon", "Grenoble", "Dijon", "Angers", "Nimes", "Saint-Denis", "Aix-en-Provence"];



  var CITIES: City[] = [];
  var pins: any[] = [];
  if (isLoading == true) {
    cities.forEach(city => {
      var apiUrl = `http://localhost:3000/weather/city/` + city;
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          CITIES.push({
            "city": data["city"],
            "temperature": data["data"]["temperature"],
            "humidity": data["data"]["humidity"],
            "image": data["image"],
            "latitude": data["lat"],
            "longitude": data["lon"]
          });
        }).finally(() => {
          console.log(CITIES);

          pins =
            CITIES.map((city, index) => (
              <Marker
                key={`marker-${index}`}
                longitude={city.longitude}
                latitude={city.latitude}
                anchor="bottom"
                color='#FFF'
                onClick={e => {
                  // If we let the click event propagates to the map, it will immediately close the popup
                  // with `closeOnClick: true`
                  e.originalEvent.stopPropagation();
                  setPopupInfo(city);
                }}
              >
                <p>{Math.round(city.temperature) + `°C`}</p>
              </Marker>
            ));
          setMarkers(pins);
          setLoading(false);
        });
    });
  }

  if (isLoading) {
    return <div className="App">Loading...</div>;
  } else {
    console.log("pins", pins);
  }
  return (
    <>
      <Map
        initialViewState={{
          latitude: 46.603354,
          longitude: 1.888334,
          zoom: 3.5,
          bearing: 0,
          pitch: 0
        }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken="pk.eyJ1IjoidGltb3RoZWVyaW91IiwiYSI6ImNsaTdoNDEzNDFpOWozZG1sNzlhOXk3MnUifQ.gOtqKpJ4vQu4hMcq7Nclhg"
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />

        {markers}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <Card
              title="Température"
              value={Math.round(popupInfo.temperature) + `°C`}
              icon="src/img/icon_soleil.png"
              valueMin="10°C"
              valueMax="25°C"
            />
          </Popup>
        )}
      </Map>
    </>
  );
}



/*useEffect(() => {
  const [showPopup, setShowPopup] = useState(false);
  var cities = ["Paris", "Lille"];


  cities.forEach(city => {
    // URL pour la requête API
    var apiUrl = `http://localhost:3000/weather/city/` + city;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        markers.push(
          <Marker
            key={`marker-${data["city"]}`}
            longitude={data["lon"]}
            latitude={data["lat"]}
            anchor="bottom"
            onClick={e => {
              // If we let the click event propagates to the map, it will immediately close the popup
              // with `closeOnClick: true`
              e.originalEvent.stopPropagation();
              setShowPopup(data["city"]);
            }}
          >
            <p>{Math.round(data["data"]["temperature"]) + `°C`}</p>
          </Marker>
        )
      });
  });

  console.log(markers);

  return <Map
    initialViewState={{
      longitude: 1.888334,
      latitude: 46.603354,
      zoom: 4,
    }}
    mapStyle="mapbox://styles/mapbox/dark-v11"
    mapboxAccessToken="pk.eyJ1IjoidGltb3RoZWVyaW91IiwiYSI6ImNsaTdoNDEzNDFpOWozZG1sNzlhOXk3MnUifQ.gOtqKpJ4vQu4hMcq7Nclhg"
  >
    {markers}

    {/* {showPopup && (
    <Popup longitude={-100} latitude={40}
      anchor="bottom"
      onClose={() => setShowPopup(false)}>
      You are here

      <Card
        title="Température"
        value="21°C"
        icon="src/img/icon_soleil.png"
        valueMin="10°C"
        valueMax="25°C"
      />
    </Popup>)} *//*}
</Map>;
});
return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
}*/

export default MyMapComponent;
