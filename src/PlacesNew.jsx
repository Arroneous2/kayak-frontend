import {
  APIProvider,
  ControlPosition,
  MapControl,
  AdvancedMarker,
  Map,
  Pin,
  useMap,
  useMapsLibrary,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { useState, useEffect, useRef } from "react";
import { LocateMe } from "./LocateMe";

export function PlacesNew(props) {
  const [formLat, setFormLat] = useState("0");
  const [formLng, setFormLng] = useState("0");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [markerRef, marker] = useAdvancedMarkerRef();

  const handleSubmit = (event) => {
    event.preventDefault;
    const params = new FormData(event.target);
    props.onCreatePlace(params, () => event.target.reset());
  };

  const handleDragEnd = (e) => {
    setFormLat(e.latLng.lat());
    setFormLng(e.latLng.lng());
  };

  const handleLatChange = (e) => {
    setFormLat(e.target.value);
  };

  const handleLngChange = (e) => {
    setFormLng(e.target.value);
  };

  const handleMapClick = (event) => {
    console.log(event.detail);
    setFormLat(event.detail.latLng.lat);
    setFormLng(event.detail.latLng.lng);
  };

  const MapHandler = ({ place, marker }) => {
    const map = useMap();

    useEffect(() => {
      if (!map || !place || !marker) return;

      if (place.geometry?.viewport) {
        map.fitBounds(place.geometry?.viewport);
      }

      marker.position = place.geometry?.location;
    }, [map, place, marker]);
    return null;
  };

  const PlaceAutocomplete = ({ onPlaceSelect }) => {
    const [placeAutocomplete, setPlaceAutocomplete] = useState(null);
    const inputRef = useRef(null);
    const places = useMapsLibrary("places");

    useEffect(() => {
      if (!places || !inputRef.current) return;

      const options = {
        fields: ["geometry", "name", "formatted_address"],
      };

      setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
    }, [places]);
    useEffect(() => {
      if (!placeAutocomplete) return;

      placeAutocomplete.addListener("place_changed", () => {
        onPlaceSelect(placeAutocomplete.getPlace());
      });
    }, [onPlaceSelect, placeAutocomplete]);
    return (
      <div className="autocomplete-container">
        <input ref={inputRef} />
      </div>
    );
  };

  return (
    <div>
      <APIProvider
        apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        solutionChannel="GMP_devsite_samples_v3_rgmautocomplete"
      >
        <Map
          style={{ width: "50vw", height: "50vh" }}
          defaultCenter={{ lat: 0, lng: 0 }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          mapId="6847afd112f5468"
          onClick={handleMapClick}
        >
          <AdvancedMarker ref={markerRef} position={null} />
          <AdvancedMarker
            position={{ lat: parseFloat(formLat), lng: parseFloat(formLng) }}
            clickable={true}
            draggable={true}
            onDragEnd={handleDragEnd}
          >
            <Pin background={"#FBBC04"} glyphColor={"#000"} borderColor={"#000"} />
          </AdvancedMarker>
        </Map>
        <MapControl position={ControlPosition.BOTTOM_LEFT}>
          <LocateMe></LocateMe>
        </MapControl>
        <MapControl position={ControlPosition.TOP}>
          <div className="autocomplete-control">
            <PlaceAutocomplete onPlaceSelect={setSelectedPlace} />
          </div>
        </MapControl>
        <MapHandler place={selectedPlace} marker={marker} />
      </APIProvider>

      <h1>New Place</h1>
      <form onSubmit={handleSubmit}>
        <div>
          trip_id: <input name="trip_id" type="text" />
        </div>
        <div>
          name: <input name="name" type="text" />
        </div>
        <div>
          address: <input name="address" type="text" />
        </div>
        <div>
          description: <input name="description" type="text" />
        </div>
        <div>
          image_url: <input name="image_url" type="text" />
        </div>
        <div>
          start_time: <input name="start_time" type="datetime-local" />
        </div>
        <div>
          end_time: <input name="end_time" type="datetime-local" />
        </div>
        <div>
          lat: <input name="lat" type="text" value={formLat} onChange={handleLatChange} />
        </div>
        <div>
          lng: <input name="lng" type="text" value={formLng} onChange={handleLngChange} />
        </div>
        <button type="submit">Create Place</button>
      </form>
    </div>
  );
}
