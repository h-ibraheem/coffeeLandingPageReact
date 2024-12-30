import { Link } from "react-router-dom";
import Logo from "../../assets/img/logoWight.svg";
import Nav from "./Nav";
function Header() {
  return (
    <header className=" flex justify-between items-center container mx-auto ">
      <Link to="/">
        <img src={Logo} className="w-16 ml-7 mt-5" alt="cafeLogo" />
      </Link>

      <Nav />
      <i className=" hidden md:block text-white text-lg fa-solid fa-earth-africa"></i>
    </header>
  );
}

export default Header;
