import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import Blog from "./pages/blogs/Blogs";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import Shopsingle from "./pages/shop/Shopsingle";
import Navbar from "./components/Navbar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header />
        <Navbar />

        <div className="flex-grow">
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <div className="loader border-t-4 border-b-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:productId" element={<Shopsingle />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          )}
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />

//         <div className="flex justify-center items-center h-screen">
//           <div className="loader border-t-4 border-b-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
//         </div>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
