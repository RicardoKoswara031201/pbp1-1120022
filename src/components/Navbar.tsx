import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/add">Tambah Menu</Link> |{" "}
      <Link to="/">List Menu</Link>
    </nav>
  );
}