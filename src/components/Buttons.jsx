import { Link } from "react-router-dom";

function Buttons({ children }) {
  return (
    <div className="btns py-14 space-x-5 text-center md:text-center">
      <Link
        className="px-14 py-4 text-white bg-brownLight font-bold rounded-full capitalize hover:text-white hover:bg-mainBrown  "
        to="/menuList"
      >
        {children}
      </Link>
    </div>
  );
}

export default Buttons;
