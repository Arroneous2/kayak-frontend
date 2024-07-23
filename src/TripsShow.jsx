import { Map, useMap } from "@vis.gl/react-google-maps";
import { PoiMarkers } from "./PoiMarkers";
import { LocateMe } from "./LocateMe";
import { ControlPosition, MapControl } from "@vis.gl/react-google-maps";
import { GoogleMapSearch } from "./GoogleMapSearch";
import { useEffect } from "react";

const initialCenter = {
  lat: -3.745,
  lng: -38.523,
};

export function TripsShow(props) {
  const map = useMap();

  useEffect(() => {
    if (map) {
      const bounds = new window.google.maps.LatLngBounds();
      props.trip.places.forEach((place) => {
        bounds.extend(new window.google.maps.LatLng(place.lat, place.lng));
      });
      map.fitBounds(bounds);
    }
  }, [map, props]);

  return (
    <div>
      <h1>Trip information</h1>
      <Map
        style={{ width: "50vw", height: "50vh" }}
        defaultCenter={initialCenter}
        defaultZoom={3}
        gestureHandling={"greedy"}
        mapId="6847afd112f5468"
      >
        <PoiMarkers places={props.trip.places} />
      </Map>
      <MapControl position={ControlPosition.BOTTOM_LEFT}>
        <LocateMe></LocateMe>
      </MapControl>
      <GoogleMapSearch></GoogleMapSearch>
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
