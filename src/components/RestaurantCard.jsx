import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card w-[200px] p-2 m-2 box-border shadow-lg max-h-53 min-h-53 rounded-lg">
      <img alt="loading" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 class="font-bold">{name}</h2>
      {/* <h6 class="font-bold break-words text-ellipsis overflow-hidden">{cuisines.join(",")}</h6> */}
      <h4 class="font-mono">{lastMileTravelString} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
