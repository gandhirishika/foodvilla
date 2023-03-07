import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getRestaurant();
  }, []);
  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.444898&lng=78.362345&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline wait for data to reload</h1>;
  }

  if (!allrestaurants) return null;
  // if(filteredrestaurants?.length===0)
  // return <h1>No Restaurants is visible</h1>
  return allrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container bg-orange-400 p-5 flex justify-items-center">
        <input
          className="search-input mr-50 w-96 h-8"
          class="font-bold"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn h-8 p-2 ml-12 rounded-md"
          class="font-bold"
          onClick={() => {
            const data = filterData(searchText, allrestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list flex flex-wrap border-spacing-1">
        {
          //we used map so that instead of writing restaurants 100 times we can simply map it with the amount of data avialble in api
          filteredrestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.data?.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })
        }
      </div>
    </>
  );
};

//array.map((data) => {
//   return(
//     <Restaurant {...data.data}/>
//   )
// })

export default Body;
