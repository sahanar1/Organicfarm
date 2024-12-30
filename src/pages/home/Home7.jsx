import home64 from "../../assets/home64.png";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";

const Home7 = () => {
  return (
    <>
      <div className="bg-[#F8F7F0] flex mt-20 px-28">
        <div className="mx-auto max-w-7xl flex p-2">
          <div className="flex p-8 gap-10">
            <div className="">
              <p className="text-[#EEC044] text-3xl font-extrabold mb-2 font-grace tracking-wide">
                Our Testimonals
              </p>
              <h1 className="text-[35px] font-extrabold font-manrope w-[300px]">
                What They are Talking About Agrios
              </h1>
              <p className="w-[350px] tracking-wider">
                There are many variations of passages of available but the
                majority have suffered alteration in some form by injected humor
                or random word which dont look even
              </p>

              <button className="bg-[#4BAF47] hover:bg-[#00762D] text-white text-sm p-3 mt-4 rounded-lg transition transform hover:translate-y-1">
                View All Testimonals
              </button>
            </div>

            <div className="w-[600px] h-[160px] bg-white flex p-4 mt-10">
              <div className="flex flex-col p-2">
                <p className="text-[#4BAF47]">
                  There are many variations of passages of available but the
                  majority have suffered alteration in some form by injected
                  humor or random word which dont look even
                </p>
                <div className="flex justify-between mt-2 font-bold">
                  <h1>SAHANA R</h1>
                  <span>
                    <StarRateRoundedIcon style={{ color: "#EEC044" }} />
                    <StarRateRoundedIcon style={{ color: "#EEC044" }} />
                    <StarRateRoundedIcon style={{ color: "#EEC044" }} />
                    <StarRateRoundedIcon style={{ color: "#EEC044" }} />
                    <StarHalfRoundedIcon style={{ color: "#EEC044" }} />
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="w-[100px] h-[100px] rounded-full p-2 border-2 border-dotted border-[#EEC044]">
                  <img
                    src={home64}
                    alt="home"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="w-10 h-10 bg-green-500 rounded-full absolute bottom-2 left-1/2 transform -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home7;
