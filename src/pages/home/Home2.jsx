import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import home3 from "../../assets/home3.png";

const Home2 = () => {
  // Dynamic data for the cards
  const cardsData = [
    {
      id: 1,
      title: "Feature 01",
      description: "We're using a New technology",
      image: home1,
    },
    {
      id: 2,
      title: "Feature 02",
      description: "Good in smart Organic Services",
      image: home2,
    },
    {
      id: 3,
      title: "Feature 03",
      description: "Reforming in the Systems",
      image: home3,
    },
  ];

  return (
    <div className="relative -mt-24 z-10 mb-[170px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center group transition duration-300 hover:bg-yellow-500"
          >
            <h2 className="text-2xl font-grace text-[#EEC044] mb-2 tracking-wide group-hover:text-green-600 transition duration-300">
              {card.title}
            </h2>
            <p className="font-[800] font-manrope text-[25px] mt-4 tracking-tight leading-6 group-hover:text-white transition duration-300 w-[200px]">
              {card.description}
            </p>
            <img
              className="w-28 h-32 object-contain transition-transform duration-300 group-hover:scale-105"
              src={card.image}
              alt={`Feature ${card.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home2;
