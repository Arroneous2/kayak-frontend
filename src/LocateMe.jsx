import { useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";

export function LocateMe() {
  const map = useMap();

  const locateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (map) {
            const bounds = new window.google.maps.LatLngBounds();
            bounds.extend(new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            map.fitBounds(bounds);
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

  useEffect(() => {
    if (!map) return;
  }, [map]);

  return (
    <button onClick={locateMe} style={{ marginTop: "10px" }}>
      Locate Me
    </button>
  );
}
