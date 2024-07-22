import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { PoiMarkers } from "./PoiMarkers";
import { useState, useCallback } from "react";

const initialCenter = {
  lat: -3.745,
  lng: -38.523,
};

export function TripsShow(props) {
  const [map, setMap] = useState(null);

  const tilesLoaded = useCallback((map) => {
    setMap(map);
  }, []);

  const locateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          if (map) {
            map.map.panTo(pos);
          }
        },
        () => {
          alert("Error: The Geolocation service failed.");
        }
      );
    } else {
      alert("Error: Your browser doesn't support geolocation.");
    }
  };

  return (
    <div>
      <h1>Trip information</h1>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Map
          style={{ width: "50vw", height: "50vh" }}
          defaultCenter={initialCenter}
          defaultZoom={3}
          gestureHandling={"greedy"}
          mapId="6847afd112f5468"
          onTilesLoaded={tilesLoaded}
        >
          <PoiMarkers places={props.trip.places} />
          <button onClick={locateMe} style={{ marginTop: "10px" }}>
            Locate Me
          </button>
        </Map>
      </APIProvider>
      <p>Title: {props.trip.title}</p>
      {props.trip.places.map((place) => (
        <div key={place.id}>
          <h2>name: {place.name}</h2>
          <img src={place.image_url} alt="" />
          <p>address: {place.address}</p>
          <p>description: {place.description}</p>
          <p>start_time: {place.start_time}</p>
          <p>end_time: {place.end_time}</p>
        </div>
      ))}
    </div>
  );
}
