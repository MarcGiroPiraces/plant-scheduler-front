import { Link } from "react-router-dom";
import "./navbar.component.css";

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/plant">Add Plant</Link>
        </li>
        <li>
          <Link to="/spot">Add a Spot</Link>
        </li>
      </ul>
    </nav>
  );
}
