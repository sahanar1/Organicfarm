import home91 from "../../assets/home91.png";
import home92 from "../../assets/home92.png";
import home93 from "../../assets/home93.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";

const Home9 = () => {
  const cardshome6 = [
    {
      id: 1,
      name: "sahana",
      title: "Bringing Food Production Back To cities",
      image: home91,
      comment: "1 Comments",
    },
    {
      id: 2,
      name: "By Admin",
      title: "The Future of Farming,Smart Irrigation Solutions",
      image: home92,
      comment: "5 Comments",
    },
    {
      id: 3,
      name: "kavin",
      title: "Agronomy and relation to Other Sciences ",
      image: home93,
      comment: "0 Comments",
    },
  ];

  return (
    <div className="mt-32 ">
      <div className="text-center items-center">
        <p className="text-[#EEC044] font-grace text-[30px] tracking-wide">
          From th Blog
        </p>
        <h1 className="text-[40px] font-[800]">News & Articles</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-10 mt-10 ">
        {cardshome6.map((item) => (
          <div
            key={item.id}
            className="group shadow-lg rounded-lg flex flex-col items-center text-center hover:shadow-2xl transition duration-300 bg-cover bg-center h-[390px]" // Adjust height here
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className="bg-white rounded h-[160px] w-full p-6 mt-auto  text-center">
              {/* Ensures text is centered */}

              <button className="text-white font-extrabold text-[16px] p-1 bg-[#4BAF47] group-hover:bg-[#00762D] w-[120px] rounded-lg mb-2 relative top-[-38px]">
  July 2024
</button>

              <div className="flex justify-between items-center w-[300px] ml-6 -mt-7">
                <span>
                  <AccountCircleOutlinedIcon
                    style={{ color: "EEC044", marginLeft: "10px" }}
                  />
                  {item.name}
                </span>
                <span>
                  <ForumRoundedIcon
                    style={{ color: "EEC044", marginLeft: "10px" }}
                  />
                  {item.comment}
                </span>
              </div>
              <p className="text-[20px] w-full mt-auto text-black font-bold p-2 font-manrope">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home9;
