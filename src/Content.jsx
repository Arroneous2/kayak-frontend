import { TripsIndex } from "./TripsIndex";
import { useState, useEffect } from "react";
import axios from "axios";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { TripsNew } from "./TripsNew";
import { Modal } from "./Modal";
import { TripsShow } from "./TripsShow";
import { PlacesNew } from "./PlacesNew";

export function Content() {
  const [trips, setTrips] = useState([]);
  const [isTripsShowVisible, setIsTripsShowVisible] = useState(false);
  const [currentTrip, setCurrentTrip] = useState({});

  const handleIndexTrips = () => {
    console.log("handleIndexTrips");
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log(response.data);
      setTrips(response.data);
    });
  };

  const handleCreateTrip = (params, successCallback) => {
    console.log("handleCreatetrip", params);
    axios.post("http://localhost:3000/trips.json", params).then((response) => {
      setTrips([...trips, response.data]);
      successCallback;
    });
  };

  const handleCreatePlace = (params, successCallback) => {
    console.log("handleCreatePlace", params);
    axios.post("http://localhost:3000/places.json", params).then(() => {
      successCallback;
    });
  };

  const handleShowTrip = (trip) => {
    console.log("handleShowTrip", trip);
    setIsTripsShowVisible(true);
    setCurrentTrip(trip);
  };

  const handleCloseShowTrip = () => {
    setIsTripsShowVisible(false);
  };

  useEffect(handleIndexTrips, []);

  return (
    <main>
      <Signup />
      <Login />
      <LogoutLink />
      <TripsNew onCreateTrip={handleCreateTrip} />
      <PlacesNew onCreatePlace={handleCreatePlace} />
      <TripsIndex trips={trips} onShowTrip={handleShowTrip} />
      <Modal show={isTripsShowVisible} onClose={handleCloseShowTrip}>
        <TripsShow trip={currentTrip} />
      </Modal>
    </main>
  );
}
