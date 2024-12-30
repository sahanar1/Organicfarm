// import TwitterIcon from '@material-ui/icons/Twitter';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import PinterestIcon from '@material-ui/icons/Pinterest';
import leaf from "../assets/leaficon.png";
import call from "../assets/icon.png";
import Email from "../assets/icon 1.png";
import address from "../assets/icon 2.png";
import arrow from "../assets/icon 3.png";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white ">
      <div className="grid grid-cols-4 gap-5 justify-between mx-auto p-6 max-w-screen-2xl">
        {/* Left Section */}
        <div className="text-center sm:text-left mb-6 sm:mb-0">
          <img
            src={logo} // Add your logo URL here
            alt="Agrios"
            className="mx-auto sm:mx-0"
          />
          <p className="mt-2 text-[#E1CC00]">
            There are many variations of passages of lorem ipsum available, but
            the majority suffered.
          </p>
          <div className="mt-4 flex justify-center sm:justify-start">
            <a href="https://twitter.com" className="mx-2">
              {/* You can use FontAwesome icons */}
            </a>
            <a href="https://facebook.com" className="mx-2">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="https://pinterest.com" className="mx-2">
              <i className="fab fa-pinterest text-xl"></i>
            </a>
          </div>
        </div>

        {/* Explore Section */}
        <div className="text-center sm:text-left mb-6 sm:mb-0">
          <h3 className="text-lg font-semibold inline-block relative">
            <span className="underline underline-offset-[10px] decoration-4 decoration-green-500">
              Explore
            </span>
            {/* <span className="inline-block w-2.5 h-2.5 ml-1  rounded-full bg-green-500"></span> */}
          </h3>

          <ul className="mt-6 text-[#E1CC00]">
            <li className="">
              <a href="#about" className="hover:text-white">
                <img src={leaf} alt="leaf" className="mr-4 inline" />
                About
              </a>
            </li>
            <li className="mt-2">
              <a href="#services" className="hover:text-white">
                <img src={leaf} alt="leaf" className="mr-4 inline " />
                Services
              </a>
            </li>
            <li className="mt-2">
              <a href="#projects" className="hover:text-white">
                <img src={leaf} alt="leaf" className="mr-4 inline" />
                Our Projects
              </a>
            </li>
            <li className="mt-2">
              <a href="#farmers" className="hover:text-white">
                <img src={leaf} alt="leaf" className="mr-4 inline" />
                Meet the Farmers
              </a>
            </li>
            <li className="mt-2">
              <a href="#news" className="hover:text-white">
                <img src={leaf} alt="leaf" className="mr-4 inline" />
                Latest News
              </a>
            </li>
            <li className="mt-2">
              <a href="#contact" className="hover:text-white">
                <img src={leaf} alt="leaf" className="mr-4 inline" />
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Policy Section */}
        <div className=" text-center sm:text-left mb-6 sm:mb-0">
          <h3 className="text-lg font-semibold inline-block relative">
            <span className="underline underline-offset-[10px] decoration-4 decoration-green-500">
              Policy
            </span>
            {/* <span className="inline-block w-2.5 h-2.5 ml-1  rounded-full bg-green-500"></span> */}
          </h3>

          <ul className="mt-6 text-[#E1CC00]">
            <li className=" hover:text-white">
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li className=" hover:text-white mt-2">
              <a href="#service">Service Policy</a>
            </li>
            <li className=" hover:text-white mt-2">
              <a href="#terms">Terms of Service</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold inline-block relative">
            <span className="underline underline-offset-[10px] decoration-4 decoration-green-500">
              Contact
            </span>
            {/* <span className="inline-block w-2.5 h-2.5 ml-1  rounded-full bg-green-500"></span> */}
          </h3>
          <ul className="mt-6 text-[#E1CC00]">
            <li className="hover:text-white ">
              <img src={call} alt="leaf" className="mr-4 inline" />
              +91 00000 00000
            </li>
            <li className="hover:text-white mt-2">
              <img src={Email} alt="leaf" className="mr-4 inline" />
              infoamruth@gmail.com
            </li>
            <li className="hover:text-white mt-2">
              <img src={address} alt="leaf" className="mr-4 inline" />
              Kolar, near new busstand, Pallavi Talkies opposite to BSNL store
            </li>
          </ul>

          <div className="mt-4  relative">
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-2 border rounded w-full py-2 px-3 text-gray-700 "
            />
            <button
              type="submit"
              className="bg-green-500  absolute inset-y-0 right-0 px-4 py-2   text-[12px] text-white rounded-r"
            >
              Send <img src={arrow} className="w-4 ml-1 inline mb-1" />
            </button>
          </div>
        </div>
      </div>

      <div className=" text-center text-sm bg-[#1F1E17] text-gray-400 py-5">
        <p>
          &copy; {new Date().getFullYear()} All Copyright Reserved by shawonetc
          Themes
        </p>
      </div>
    </footer>
  );
};

export default Footer;
