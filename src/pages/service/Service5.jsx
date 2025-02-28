import service13 from "../../assets/service13.png";
import service14 from "../../assets/service14.png";
import service15 from "../../assets/service15.png";
import service16 from "../../assets/service16.png";

const Service5 = () => {
  return (
    <div className="flex mt-20 mx-auto max-w-7xl w-full h-[600px] gap-6">
      <div>
        <img src={service13} alt="agri" className="w-[1000px] h-[450px]" />
      </div>

      <div className="ml-10">
        <p className="text-[#EEC044] font-grace tracking-wider text-3xl">
          Get to Know us
        </p>
        <h1 className="text-[48px] font-[800] w-[500px] font-manrope">
          The Best Agriculture Market
        </h1>
        <p className="text-[#4BAF47] font-[800] mt-4">
          There are many variations of passages of lorem available, but the
          majority have suffered alteration.
        </p>
        <p className="mt-4 text-gray-400 font-[600]">
          There are many variations of passages of lorem ipsum available but the
          majority have suffered alteration in some form by injected humor or
          random word which don’t look even.
        </p>

        {/* Row of Images */}
        <div className="flex gap-6 mt-6">
          <img src={service14} alt="Image 1" className="w-[80px] h-[80px]" />
          <img src={service15} alt="Image 2" className="w-[80px] h-[80px]" />
          <img src={service16} alt="Image 3" className="w-[80px] h-[80px]" />
        </div>

      </div>
    </div>
  );
};

export default Service5;
