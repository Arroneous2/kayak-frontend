import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { PoiMarkers } from "./PoiMarkers";

export function TripsShow(props) {
  const pois = [
    { key: "operaHouse", location: { lat: -33.8567844, lng: 151.213108 } },
    { key: "tarongaZoo", location: { lat: -33.8472767, lng: 151.2188164 } },
    { key: "manlyBeach", location: { lat: -33.8209738, lng: 151.2563253 } },
    { key: "hyderPark", location: { lat: -33.8690081, lng: 151.2052393 } },
    { key: "theRocks", location: { lat: -33.8587568, lng: 151.2058246 } },
    { key: "circularQuay", location: { lat: -33.858761, lng: 151.2055688 } },
    { key: "harbourBridge", location: { lat: -33.852228, lng: 151.2038374 } },
    { key: "kingsCross", location: { lat: -33.8737375, lng: 151.222569 } },
    { key: "botanicGardens", location: { lat: -33.864167, lng: 151.216387 } },
    { key: "museumOfSydney", location: { lat: -33.8636005, lng: 151.2092542 } },
    { key: "maritimeMuseum", location: { lat: -33.869395, lng: 151.198648 } },
    { key: "kingStreetWharf", location: { lat: -33.8665445, lng: 151.1989808 } },
    { key: "aquarium", location: { lat: -33.869627, lng: 151.202146 } },
    { key: "darlingHarbour", location: { lat: -33.87488, lng: 151.1987113 } },
    { key: "barangaroo", location: { lat: -33.8605523, lng: 151.1972205 } },
  ];

  return (
    <div>
      <h1>Trip information</h1>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Map
          style={{ width: "50vw", height: "50vh" }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          mapId="6847afd112f5468"
        >
          <PoiMarkers pois={pois} />
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
