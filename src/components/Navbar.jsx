// src/components/Navbar.js
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../pages/home/home.css";

const Navbar = () => {
  return (
    <nav className="navbarbg p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-10 text-gray-600">
          {/* Using NavLink for active link styling */}
          <NavLink
            to="/"
            className="text-gray-400"
            style={({ isActive }) =>
              isActive ? { color: "black", fontWeight: "bolder" } : {}
            }
          >
            Home <KeyboardArrowDownIcon />
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-400"
            style={({ isActive }) =>
              isActive ? { color: "black", fontWeight: "bolder" } : {}
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className="text-gray-400"
            style={({ isActive }) =>
              isActive ? { color: "black", fontWeight: "bolder" } : {}
            }
          >
            Services <KeyboardArrowDownIcon />
          </NavLink>
          <NavLink
            to="/blogs"
            className="text-gray-400"
            style={({ isActive }) =>
              isActive ? { color: "black", fontWeight: "bolder" } : {}
            }
          >
            Blogs <KeyboardArrowDownIcon />
          </NavLink>
          <NavLink
            to="/shop"
            className="text-gray-400"
            style={({ isActive }) =>
              isActive ? { color: "black", fontWeight: "bolder" } : {}
            }
          >
            Shop <KeyboardArrowDownIcon />
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-400"
            style={({ isActive }) =>
              isActive ? { color: "black", fontWeight: "bolder" } : {}
            }
          >
            Contact
          </NavLink>
        </div>

        <div className="flex gap-5 ">
          <div className="border-l h-10 border-gray-300"></div>
          <SearchIcon style={{ marginTop: "5px" }} />
          <ShoppingCartIcon style={{ marginTop: "5px" }} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
