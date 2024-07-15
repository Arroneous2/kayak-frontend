export function TripsShow(props) {
  return (
    <div>
      <h1>Trip information</h1>
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
