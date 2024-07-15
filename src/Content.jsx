import { TripsIndex } from "./TripsIndex";
import { useState, useEffect } from "react";
import axios from "axios";

export function Content() {
  const [trips, setTrips] = useState([]);

  const handleIndexTrips = () => {
    console.log("handleIndexTrips");
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log(response.data);
      setTrips(response.data);
    });
  };

  useEffect(handleIndexTrips, []);
  return (
    <main>
      <h1>Welcome to React!</h1>
      <TripsIndex trips={trips} />
    </main>
  );
}
