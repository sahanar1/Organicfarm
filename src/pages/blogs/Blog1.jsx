import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import about1 from "../../assets/About1.png";
import { Link } from "react-router-dom";

const Blog1 = () => {
  return (
    <div className=" w-full h-[400px] md:h-[400px] relative">
      <LazyLoadImage
        src={about1}
        alt="smokedetection"
        className="absolute top-0 left-0 object-cover w-full h-full"
      />

      <div className="relative max-w-7xl mx-auto  flex flex-col items-start justify-center h-full p-4 text-start">
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 max-w-7xl mx-auto">
          <p className="text-white mt-2 pl-8">
            <Link to="/">HOME</Link> &#47; BLOG
          </p>
          <h1 className="text-4xl font-bold text-white pl-8">Blog</h1>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
