import SocialMediaIcons from "./SocialMediaIcons";
import { FaAt } from "react-icons/fa";
import { FaLocationDot, FaClock, FaPhone } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="bg-yellow-950 pt-12 px-5">
      <div className="container mx-auto grid md:grid-cols-3">
        <div className="logo">
          <img
            src="../src/assets/img/logoWight.svg"
            className="flex mx-auto w-32 py-14"
            alt="logo"
          />
          <SocialMediaIcons />
        </div>

        <div className="links capitalize font-ubuntu font-bold text-l  text-white mt-6">
          <h2 className="mb-5">quick link</h2>
          <a
            href="#"
            className="block py-5 border-b hover:text-xl hover:mx-auto pr-2"
          >
            <i className="mx-4 fa-solid fa-chevron-right"></i> home
          </a>
          <a
            href="#story"
            className="block py-5 border-b hover:text-xl hover:mx-auto pr-2"
          >
            <i className="mx-4 fa-solid fa-chevron-right"></i> story
          </a>
          <a
            href="#menu"
            className="block py-5 border-b hover:text-xl hover:mx-auto pr-2"
          >
            <i className="mx-4 fa-solid fa-chevron-right"></i> menu
          </a>
          <a
            href="#gallery"
            className="block py-5 border-b hover:text-xl hover:mx-auto pr-2"
          >
            <i className="mx-4 fa-solid fa-chevron-right"></i> gallery
          </a>
          <a
            href="#"
            className="block py-5 border-b hover:text-xl  hover:mx-auto pr-2"
          >
            <i className="mx-4 fa-solid fa-chevron-right"></i> location
          </a>
        </div>

        <div className="workhours font-ubuntu font-bold text-l  text-white mt-6">
          <h2 className="mb-5">contact us</h2>
          <ul className="p-5 ml-5">
            <li className="mb-7 flex">
              <a href="#">
                <FaLocationDot className="mr-4 text-xl" />
              </a>{" "}
              Jeddah - Alsafa{" "}
            </li>
            <li className="mb-7 flex">
              <FaClock className="mr-4 text-xl" />
              10:00 am - 3:00 am
            </li>
            <li className="mb-7 flex">
              <FaPhone className="mr-4 text-xl" />
              050 218 9035
            </li>
            <li className="mb-7 ">
              <FaAt className="mr-2 text-xl" />
              h.ibraheem14@outlook.com
            </li>
          </ul>
        </div>
      </div>
      <h2 className="text-white mt-10 text-center capitalize pb-4">
        create with love{" "}
        <span className="font-bold text-blue-400">
          <a href="https://www.dragon-sd.com" target="_blank">
            Mr.Dragon
          </a>{" "}
          &copy;
        </span>{" "}
        all right reserved
      </h2>
    </footer>
  );
}

export default Footer;
