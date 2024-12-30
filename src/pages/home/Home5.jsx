import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";

const Home5 = () => {
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

      {/* Card Positioned within the Parent Div */}
      <div className="absolute bottom-[350px] left-1/2 transform -translate-x-1/2 bg-[#4BAF47] rounded-lg shadow-lg w-[90%] lg:w-[800px] p-4 h-[100px] flex flex-wrap justify-center items-center">
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
  );
};

export default Home5;


// const Home5 = () => {
//   return (
//     <div className="flex justify-center items-center mt-16">

//       <div className="relative w-full max-h-[300px] ">
//         <video
//           className=" bg-gray-500 rounded-lg shadow-lg"
//           autoPlay
//           loop
//           muted
//         >
//           <source src="/Videos/video.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//       </div>
//     </div>
//   );
// };

// export default Home5;
