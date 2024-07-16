export function PlacesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault;
    const params = new FormData(event.target);
    props.onCreatePlace(params, () => event.target.reset());
  };

  return (
    <div>
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
          lat: <input name="lat" type="text" />
        </div>
        <div>
          lng: <input name="lng" type="text" />
        </div>
        <button type="submit">Create Place</button>
      </form>
    </div>
  );
}
