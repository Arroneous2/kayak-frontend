export function TripsIndex(props) {
  return (
    <div>
      <h1>All Trips</h1>
      {props.trips.map((trip) => (
        <div key={trip.id}>
          <h2>Title: {trip.title}</h2>
          <img src={trip.image_url} alt="" />
          <p>Start_time: {trip.start_time}</p>
          <p>End_time: {trip.end_time}</p>
        </div>
      ))}
    </div>
  );
}
