import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

export function PoiMarkers(props) {
  return (
    <div>
      {props.pois.map((poi) => (
        <AdvancedMarker key={poi.key} position={poi.location} clickable={true} draggable={true}>
          <Pin background={"#FBBC04"} glyphColor={"#000"} borderColor={"#000"} />
        </AdvancedMarker>
      ))}
    </div>
  );
}
