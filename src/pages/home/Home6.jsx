import home61 from "../../assets/home61.png";
import home62 from "../../assets/home62.png";
import home63 from "../../assets/home63.png";
import home64 from "../../assets/home64.png";

const Home6 = () => {
  const cardshome6 = [
    {
      id: 1,
      title: "Easy Harvesting",
      image: home61,
    },
    {
      id: 2,
      title: "Agriculture Farming",
      image: home62,
    },
    {
      id: 3,
      title: "Ecological Farming",
      image: home63,
    },
    {
      id: 4,
      title: "Organic Farming",
      image: home64,
    },
  ];

  return (
    <div className="mt-20 mb-10">
      <div className="text-center items-center">
        <p className="text-[#EEC044] font-grace text-[30px] font-[600] tracking-widest">
          Recents
        </p>
        <h1 className="text-[40px] font-[800]">Explore Farming</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto mt-10">
        {cardshome6.map((card) => (
          <div
            key={card.id}
            className="shadow-lg rounded-lg flex flex-col items-center text-center bg-cover bg-center h-[390px] relative transition-transform duration-200 hover:scale-105"
            style={{
              backgroundImage: `url(${card.image})`,
            }}
          >
            <p className="text-[25px] text-start text-white font-bold w-[150px] font-manrope absolute bottom-10">
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home6;
