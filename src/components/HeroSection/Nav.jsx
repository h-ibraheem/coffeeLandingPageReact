import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="hidden capitalize space-x-6 font-ubuntu font-bold text-l md:block text-white">
      <Link to="#story">story</Link>
      <Link to="/menuList">menu</Link>
      <Link to="#gallery">gallery</Link>
      <Link to="#">location</Link>
    </nav>
  );
}

export default Nav;
