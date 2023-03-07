

import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { removeItem } from "../utils/cartSlice";

const FoodItem = ({
  name,
  description,
  cloudinaryImageId,
  price,
  id,
}) => {

  const dispatch = useDispatch();
  const remove = (id) => {
    dispatch(removeItem(id));
  }
  return (
    <div className="card w-[200px] p-2 m-2 box-border shadow-lg max-h-53 min-h-53 rounded-lg">
      <img alt="loading" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 class="font-bold">{name}</h2>
      {/* <h2 class="font-bold">{description}</h2> */}
      <h4 class="font-mono">Rupee:{price/100}</h4>
      <button onClick={()=>remove(id)} className="bg-green-600 rounded-lg p-2">Delete</button>
    </div>
  );
};

export default FoodItem;