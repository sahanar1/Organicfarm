import service10 from "../../assets/service10.png";
import service11 from "../../assets/service11.png";
import service12 from "../../assets/service12.png";

const categories = [
  {
    title: "Quality Standards",
    image: service10,
  },
  {
    title: "Organic Farming",
    image: service11,
  },
  {
    title: "Agriculture Products",
    image: service12,
  },
];

const Service4 = () => {
  return (
    <div className="flex justify-center gap-6 mt-8">
      {categories.map((category, index) => (
        <div key={index} className="text-center">
                <h3 className="text-lg font-semibold mt-3">{category.title}</h3>
          <img
            src={category.image}
            alt={category.title}
            className="w-64 h-64 object-cover rounded-lg border-2"
          />
      
        </div>
      ))}
    </div>
  );
};

export default Service4;
