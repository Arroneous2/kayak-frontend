export function TripsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault;
    const params = new FormData(event.target);
    props.onCreateTrip(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Trip</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
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
        <button type="submit">Create Trip</button>
      </form>
    </div>
  );
}
