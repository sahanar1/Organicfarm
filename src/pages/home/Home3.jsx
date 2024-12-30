import basket from "../../assets/home3icon.png";
import lab from "../../assets/home2icon.png";
import agri from "../../assets/homeagri.png";

const Home3 = () => {
  return (
    <div className="flex mx-auto max-w-7xl w-full h-[600px]">
      <div>
        <img src={agri} alt="agri" className="w-[1000px] h-[550px] " />
      </div>

      <div>
        <p className="text-[#EEC044] font-grace tracking-wider text-3xl mt-6">
          Our Introduction
        </p>
        <h1 className="text-[48px] font-[800] w-[500px] font-manrope">
          Agriculture & Organic Product Farm
        </h1>
        <p className="text-[#4BAF47] font-[800] mt-4">
          Agrios is the largest global organic farm
        </p>
        <p className="mt-4">
          There are many variations of passages of lorem ipsum available but the
          majority have suffered alteration in some form by injected humor or
          random word which dont look even
        </p>

        <div className="flex mt-6 gap-4">
          <img src={basket} alt=" fruits " className="mr-2 h-20" />
          <div className="text-black font-custom flex font-bold w-[200px] text-[20px] mt-4">
            Group Fruits vegetables
          </div>
          <img src={lab} alt="fruits" className="h-20" />
          <div className=" text-black flex font-bold font-custom w-[200px] text-[20px] mt-4">
            Tips for ripening your fruits
          </div>
        </div>

        <ul className="list-disc mt-10 ml-5">
          <li className="text-lg">Lorem ipsum is not simply random text.</li>
          <li className="text-lg">
            Making this the first true generator on the internet
          </li>
        </ul>
        <button className="text-white font-extrabold text-[16px] p-3 mt-4 bg-[#4BAF47] hover:bg-[#00762D] w-[150px] rounded-lg transition transform hover:translate-y-1">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Home3;
