import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";

const Service3 = () => {
  return (
    <div className="relative mt-28 h-[400px] bg-slate-300">
      {/* Content Area */}
      <div className="max-w-7xl mx-auto text-start">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-[1000px] p-4">
          <h1 className="mt-5 text-white p-4 font-manrope text-[30px] lg:text-[45px] font-extrabold lg:w-[350px]">
            Agriculture Matters to the Future of Development
          </h1>
          <PlayCircleFilledOutlinedIcon
            style={{ fontSize: "50px", color: "white" }}
          />
        </div>
      </div>

    </div>
  );
};

export default Service3;
