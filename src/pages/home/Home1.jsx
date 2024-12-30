import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import headbg from "../../assets/headbg.png";
import leaf from "../../assets/leaf.png";

const Home1 = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 4300,
      behavior: "smooth",
    });
  };
  return (
    <div className=" w-full h-[600px] md:h-[800px] relative">
      <LazyLoadImage
        src={headbg}
        alt="smokedetection"
        className="absolute top-0 left-0 object-cover w-full h-full"
      />

      <div className="relative max-w-7xl mx-auto  flex flex-col items-start justify-center h-full p-4 text-start">
        <p className="text-white text-lg tracking-widest">
          WELCOME TO AGRIOS FARMING
        </p>
        <h1 className="mb-4 text-[100px] leading-tight text-white  font-grace w-[500px]">
          Agriculture Eco Farming
        </h1>
        <p className="mt-2 leading-6 sm:leading-7 md:leading-8 text-left  font-[400] text-white md:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="flex items-center mt-5">
          <button
            onClick={handleScrollToTop}
            className="text-white font-extrabold text-[16px] p-1 bg-[#4BAF47] hover:bg-[#00762D] w-[150px] rounded-lg transition transform hover:translate-y-1"
          >
            Discover More
          </button>
          <img src={leaf} alt="leaf" className="ml-4 h-8 w-auto" />
        </div>
      </div>
    </div>
  );
};

export default Home1;
