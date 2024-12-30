import { FaSnapchat, FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function SocialMediaIcons() {
  return (
    <div className="social flex justify-center items-center space-x-7 text-white">
      <a
        href="https://www.snapchat.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSnapchat className="text-2xl" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-2xl" />
      </a>
      <a
        href="https://www.tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTiktok className="text-2xl" />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
