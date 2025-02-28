import About5 from "../../assets/About5.png";
import About6 from "../../assets/About6.png";
import About7 from "../../assets/About7.png";

const farmers = [
  {
    name: "Kevin Smith",
    title: "Farmer",
    image: About5,
  },
  {
    name: "Jessica Brown",
    title: "Farmer",
    image: About6,
  },
  {
    name: "David Martin",
    title: "Farmer",
    image: About7,
  },
];

const FarmerCard = ({ name, image, title }) => {
  return (
    <div className="overflow-hidden ">
      <div className="relative">
        <img
          src={image}
          alt={`${name}`}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute bottom-0.5 left-32 right-0 shadow-2xl bg-white p-4 flex items-end">
          <div className="bg-green-400 p-2 rounded-lg mr-4 ">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-gray-500 text-end">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MeetOurFarmers = () => {
  return (
    <section className="max-w-7xl mx-auto mb-4">
      <div className="text-center mb-12">
        <p className="text-yellow-500 font-medium mb-2">Team Members</p>
        <h2 className="text-4xl font-bold text-gray-900">Meet Our Farmers</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {farmers.map((farmer, index) => (
          <FarmerCard
            key={index}
            name={farmer.name}
            title={farmer.title}
            image={farmer.image}
          />
        ))}
      </div>
    </section>
  );
};

export default MeetOurFarmers;
