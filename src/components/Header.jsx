import call from "../assets/callheader.png";
import email from "../assets/emailheader.png";
import address from "../assets/addressheader.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Agrios" className="h-12 mr-2" />
          {/* <span className="font-bold text-xl">Agrios</span> */}
        </a>

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-[#f4f1d8] rounded-full px-1 py-1">
            <TwitterIcon />
          </div>
          <div className="bg-[#f4f1d8] rounded-full px-1 py-1">
            <FacebookRoundedIcon />
          </div>
          <div className="bg-[#f4f1d8] rounded-full px-1 py-1">
            <PinterestIcon />
          </div>
          <div className="bg-[#f4f1d8] rounded-full px-1 py-1">
            <InstagramIcon  />
          </div>
          
        </div>

        {/* <nav className="hidden md:flex space-x-4" F8F7F0>
          <a href="/about" className="hover:text-gray-600">
            About
          </a>
          <a href="/products" className="hover:text-gray-600">
            Products
          </a>
          <a href="/contact" className="hover:text-gray-600">
            Contact
          </a>
        </nav> */}

        <div className="flex items-center space-x-4">
          <a
            href="tel:+91 0000 00 0000"
            className="flex items-center hover:text-gray-600 "
          >
            <img src={call} alt="phone" className="h-8 w-8 mr-2" />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#4BAF47"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg> */}

            <div className="flex flex-col">
              <span className="text-gray-400 ">Call</span>
              <span className="font-[600]">+91 0000 00 0000</span>
            </div>
          </a>
          <div className="border-l h-10 border-gray-300"></div>
          <a
            href="mailto:info@amruth@gmail.com"
            className="flex items-center hover:text-gray-600"
          >
            <img src={email} alt="email" className="h-8 w-8 mr-3" />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#4BAF47"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg> */}
            <div className="flex flex-col">
              <span className="text-gray-400">Email</span>
              <span className="font-[800] font-manrope">
                {" "}
                info@amruth@gmail.com
              </span>
            </div>
          </a>
          <div className="border-l h-10 border-gray-300"></div>
          <a
            href="https://goo.gl/maps/9NTq3uJoUfLLfcDt8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-600"
          >
            <img src={address} alt="address" className="h-9 w-9" />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg> */}
            <div className="flex flex-col">
              <span className="text-gray-400">Address</span>
              <span className="font-[600] font-manrope">Bangalore,Kolar</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
