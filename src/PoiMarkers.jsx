import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

export function PoiMarkers(props) {
  console.log("props of poi", props.places[0].lat);

  return (
    <div>
      {props.places.map((place) => (
        <AdvancedMarker
          key={place.id}
          position={{ lat: parseFloat(place.lat), lng: parseFloat(place.lng) }}
          clickable={true}
          draggable={true}
        >
          <Pin background={"#FBBC04"} glyphColor={"#000"} borderColor={"#000"} />
        </AdvancedMarker>
      ))}
    </div>
  );
}
