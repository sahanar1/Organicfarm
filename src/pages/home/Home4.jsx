import mangoes from "../../assets/mangoes.png";
import vegetables from "../../assets/vegetables.png";
import plant from "../../assets/plant.png";
import dailyproducts from "../../assets/dailyproducts.png";
import home41 from "../../assets/home41.png";
import home42 from "../../assets/home42.png";
import home43 from "../../assets/home43.png";
import home44 from "../../assets/home44.png";

const Home4 = () => {
  const data = [
    {
      id: 1,
      image: mangoes,
      icon: home41,
      description: "Agriculture Products",
    },
    {
      id: 2,
      image: vegetables,
      icon: home42,
      description: "Organic  Products",
    },
    {
      id: 3,
      image: plant,
      icon: home43,
      description: "Fresh  Vegetables",
    },
    {
      id: 4,
      image: dailyproducts,
      icon: home44,
      description: "Daily  Products",
    },
  ];

  return (
    <>
      <div className="bg-[#F8F7F0] flex items-center justify-center mt-10 h-[400px]">
        <div className="text-center -mt-20 mb-10 p-10">
          <p className="text-[#EEC044] text-3xl mb-2 font-grace">
            Our Services
          </p>
          <h1 className="text-[40px] font-extrabold">What We Offer</h1>
        </div>
      </div>

      {/* cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto mb-10 -mt-40">
        {data.map((item) => (
          <div
            key={item.id}
            className="shadow-lg rounded-lg flex flex-col items-center text-center hover:shadow-2xl transition duration-300 bg-cover bg-center h-[390px]" // Adjust height here
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className="bg-white rounded-lg py-0 px-8 p-6 mt-auto mb-4 text-center">
              {" "}
              {/* Ensures text is centered */}
              <img
                src={item.icon}
                alt={`${item.description} icon`}
                className="w-20 h-20 -mt-10 mx-auto" // Centers the icon
              />
              <p className="text-[25px] font-bold w-[150px] p-2 font-manrope">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home4;