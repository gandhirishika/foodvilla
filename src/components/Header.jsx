import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

export const Title = () => (
  <a href="/">
    <img
      className="h-24 p-2"
      alt="loading"
      src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
    />
  </a>
);
export const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector(store=>store.cart.items);
  return (
    <div className="flex justify-between shadow-lg">
      <Title />
      <div className="nav_items drop-shadow-2xl ">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/" class="font-bold hover:text-orange-400">
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link to="/about" class="font-bold  hover:text-orange-400">
              About
            </Link>
          </li>
          <li className="px-2">
            <Link to="/contact" class="font-bold  hover:text-orange-400">
              Contact
            </Link>
          </li>
          <li className="px-2">
            <Link to="/cart" class="font-bold  hover:text-orange-400">
              Cart-{cartItems.length} 
            </Link>
          </li>
        </ul>
      </div>
      <h1 className="py-10 drop-shadow-2xl">{isOnline ? "🟢" : "🔴"}</h1>
      <span className="font-bold py-10 drop-shadow-2xl">{user.name}</span>

      {loggedIn ? (
        <button className="px-2 font-bold  hover:text-orange-400" onClick={() => setLoggedIn(false)}>
          Login
        </button>
      ) : (
        <button className="px-2  font-bold  hover:text-orange-400" onClick={() => setLoggedIn(true)}>
          LogOut
        </button>
      )}
    </div>
  );
};

export default Header;
