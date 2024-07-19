import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a>
      </nav>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Log in</Link>
      <LogoutLink />
      <Link to="/tripsindex">Trips Index</Link>
      <Link to="/tripsnew">Create New Trip</Link>
      <Link to="/placesnew">Add Place to Trip</Link>
    </header>
  );
}
