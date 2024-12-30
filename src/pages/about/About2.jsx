import About2 from "../../assets/About2.png";

const Home3 = () => {
  return (
    <div className="flex mt-20 mx-auto max-w-7xl w-full h-[600px] gap-6">
      <div>
        <img src={About2} alt="agri" className="w-[1000px] h-[550px] " />
      </div>

      <div className=" ml-10">
        <p className="text-[#EEC044] font-grace tracking-wider text-3xl mt-">
          Get to Know us
        </p>
        <h1 className="text-[48px] font-[800] w-[500px] font-manrope">
          The Best Agricukture Market
        </h1>
        <p className="text-[#4BAF47] font-[800] mt-4">
          There are many variations of passages of lorem available, but the
          majority have suffered alteration
        </p>
        <p className="mt-4 text-gray-400 font-[600]" >
          There are many variations of passages of lorem ipsum available but the
          majority have suffered alteration in some form by injected humor or
          random word which dont look even
        </p>

        {/* <div className="flex mt-6 gap-4">
          <img src={basket} alt=" fruits " className="mr-2 h-20" />
          <div className="text-black font-custom flex font-bold w-[200px] text-[20px] mt-4">
            Group Fruits vegetables
          </div>
          <img src={lab} alt="fruits" className="h-20" />
          <div className=" text-black flex font-bold font-custom w-[200px] text-[20px] mt-4">
            Tips for ripening your fruits
          </div>
        </div> */}

<ul className="font-[800] mt-10 ml-5">
  <li className="text-lg flex items-center">
    <span className="text-green-500 mr-2">✔</span> Suspe ndisse suscipit sagittis leo
  </li>
  <li className="text-lg flex items-center">
    <span className="text-green-500 mr-2">✔</span> Entum estibulum disgnissim posuere
  </li>
  <li className="text-lg flex items-center">
    <span className="text-green-500 mr-2">✔</span> Lorem Ipsum on the tend to repeat
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
