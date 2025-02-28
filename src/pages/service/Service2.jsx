// import home1 from "../../assets/home1.png";
// import home2 from "../../assets/home2.png";
// import home3 from "../../assets/home3.png";

// const Home2 = () => {
//   // Dynamic data for the cards
//   const cardsData = [
//     {
//       id: 1,
//       title: "Feature 01",
//       description: "We're using a New technology",
//       image: home1,
//     },
//     {
//       id: 2,
//       title: "Feature 02",
//       description: "Good in smart Organic Services",
//       image: home2,
//     },
//     {
//       id: 3,
//       title: "Feature 03",
//       description: "Reforming in the Systems",
//       image: home3,
//     },
//   ];

//   return (
//     <div className="relative -mt-24 z-10 mb-[170px]">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
//         {cardsData.map((card) => (
//           <div
//             key={card.id}
//             className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center group transition duration-300 hover:bg-yellow-500"
//           >
//             <h2 className="text-2xl font-grace text-[#EEC044] mb-2 tracking-wide group-hover:text-green-600 transition duration-300">
//               {card.title}
//             </h2>
//             <p className="font-[800] font-manrope text-[25px] mt-4 tracking-tight leading-6 group-hover:text-white transition duration-300 w-[200px]">
//               {card.description}
//             </p>
//             <img
//               className="w-28 h-32 object-contain transition-transform duration-300 group-hover:scale-105"
//               src={card.image}
//               alt={`Feature ${card.id}`}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home2;


import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
import service5 from "../../assets/service5.png";
import service6 from "../../assets/service6.png";
import service7 from "../../assets/service7.png";
import service8 from "../../assets/service8.png";
import service9 from "../../assets/service9.png";

const cards = [
  {
    title: "Agriculture Products",
    image: service2, // Replace with actual image URL
    icon: service6, // Replace with actual icon or SVG
  },
  {
    title: "Organic Products",
    image: service3,
    icon: service7,
  },
  {
    title: "Fresh Vegetables",
    image: service4,
    icon: service8,
  },
  {
    title: "Dairy Products",
    image: service5,
    icon: service9,
  },
];

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative w-64 rounded-xl overflow-hidden shadow-lg bg-white"
        >
          {/* Background Image */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-56 object-cover"
          />

          {/* Card Content */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-2xl w-48 shadow-md text-center">
            {/* Icon */}
            <div className="flex justify-center items-center bg-green-200 w-12 h-12 rounded-xl mx-auto">
              <img src={card.icon} alt="icon" className="w-8 h-8" />
            </div>

            {/* Title */}
            <h3 className="text-black font-semibold mt-2">{card.title}</h3>

            {/* Read More Button */}
            <button className="bg-green-500 text-white text-sm px-4 py-2 rounded-lg shadow-md mt-3">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

