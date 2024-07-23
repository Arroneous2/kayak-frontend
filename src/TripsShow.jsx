import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { PoiMarkers } from "./PoiMarkers";
import { LocateMe } from "./LocateMe";
import { ControlPosition, MapControl } from "@vis.gl/react-google-maps";
import { GoogleMapSearch } from "./GoogleMapSearch";

const initialCenter = {
  lat: -3.745,
  lng: -38.523,
};

export function TripsShow(props) {
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
        >
          <PoiMarkers places={props.trip.places} />
        </Map>
        <MapControl position={ControlPosition.BOTTOM_LEFT}>
          <LocateMe></LocateMe>
        </MapControl>
        <GoogleMapSearch></GoogleMapSearch>
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
