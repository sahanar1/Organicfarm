import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import background from "../../assets/about31.png";

const About3 = () => {
  return (
    <div className="relative mt-28 h-[400px] bg-slate-300 max-w-7xl mx-auto">
      {/* Content Area */}
      <div className=" text-start">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-[1000px] p-4">
          <h1 className="mt-5 text-white p-4 font-manrope text-[30px] lg:text-[45px] font-extrabold lg:w-[350px]">
            Agriculture Matters to the Future of Development
          </h1>
          <PlayCircleFilledOutlinedIcon
            style={{ fontSize: "50px", color: "white" }}
          />
        </div>
      </div>

      {/* Card Positioned within the Parent Div */}
      <div className="transform bg-[#1F1E17] shadow-lg h-[100px] flex ">
        {/* Image comes first */}
        <img src={background} alt="leaf" className="h-[100px] w-[30%] -mt-1 items-start" />
        <div className="p-4 items-center justify-center flex">
        {/* Text elements */}
        <span className="text-white font-bold text-lg mx-4 lg:mx-8 transition-transform duration-300 hover:scale-105">
          Agriculture Products
        </span>
        <span className="text-white font-bold text-lg mx-4 lg:mx-8 transition-transform duration-300 hover:scale-105">
          Satisfied Clients
        </span>
        <span className="text-white font-bold text-lg mx-4 lg:mx-8 transition-transform duration-300 hover:scale-105">
          Expert Farmers
        </span>
        </div>
      </div>
    </div>
  );
};

export default About3;
