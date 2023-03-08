import { useParams } from "react-router-dom"; //useParams helps to read url;
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestauarant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  //   const params = useParams();
  //   const { id } = params
  const { resId } = useParams();
  // const [restaurantDetails, setRestaurantDetails] = useState();
  const restaurant = useRestaurant(resId);
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className=" grid justify-items-center bg-orange-400">
        {/* <h1>Restaurant id:{resId}</h1> */}
        <h1 className="font-bold text-2xl p-3">{restaurant.name}</h1>
        <img
          className="h-40 "
          alt="loading"
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
        />
        {/* <h1>{restaurant.area}</h1> */}
        {/* <h1>{restaurant.city}</h1> */}
        <h1 className="font-bold text-2xl p-2">Menu</h1>
      </div>
      <div>
        <div className="dishes grid justify-items-center ">
          <ul>
            {Object.values(restaurant?.menu?.items).map((item) => (
              <div
                className="menu-item flex  rounded-xl h-15 w-25 p-20 box-border shadow-xl"
                key={item?.id}
              >
                <div className="menu-item-details ">
                  <h3 className="item-title">{item?.name}</h3>
                  <p className="item-cost">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                </div>
                <div className="menu-img-wrapper   border-spacing-1  grid justify-items-end py-2">
                  {item?.cloudinaryImageId && (
                    <img
                      className="menu-item-img rounded-xl h-24 px-20 "
                      src={IMG_CDN_URL + item?.cloudinaryImageId}
                      alt={item?.name}
                    />
                  )}
                  
                </div>
                <button className="bg-orange-400 h-12 p-2 rounded-lg mx-10" onClick={() => {addFoodItem(item)}}>
                    ADD +
                  </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
