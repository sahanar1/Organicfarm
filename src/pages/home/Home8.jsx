import home8 from "../../assets/home8.png";

const Home8 = () => {
  return (
    <div className="mt-20 max-w-7xl mx-auto">
      <div className=" flex gap-10">
        <img src={home8} alt="home" className=" h-[590px]" />
        <div className="p-4">
          <span className="text-[#EEC044] font-grace text-[30px]">
            Our Farm Benefits
          </span>
          <h1 className="text-[40px] font-extrabold font-manrope mt-4">
            Why Choose Agrios
          </h1>

          <p className="text-gray-400 font-[600] mt-8 w-[450px]">
            There are many variations of passages of available but the majority
            have suffered alteration in some form by injected humor or random
            word which dont look even
          </p>

          <ul className="w-[450px]">
            <li className="mt-4 ">
              <span className="font-bold ">Quality Organic Food</span>
              <br />
              There are variation you need to be sure there is anything hidden
              in the middle of text
            </li>
            <li className="mt-4">
              <span className="font-bold">Professional Farmers</span>
              <br />
              There are variation you need to be sure there is anything hidden
              in the middle of text
            </li>
            <li className="mt-4">
              <span className="font-bold">Quality Products</span>
              <br />
              There are variation you need to be sure there is anything hidden
              in the middle of text
            </li>
          </ul>

          <button className="text-white font-extrabold mt-10 text-[16px] p-2 bg-[#4BAF47] hover:bg-[#00762D] w-[150px] rounded-lg transition transform hover:translate-y-1 ">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home8;
