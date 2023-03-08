import { useDispatch, useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {

const cartItems = useSelector((store)=>store.cart.items);
const dispatch= useDispatch();

const handleClearCart = () => {
  dispatch(clearCart());
}
const handleOrder = () => {
  alert("Congratulations! Your Order have been Placed")
}
//WE DONt write store=>store because it will render entire cart so subscribe to only specific items 
//major performace improvement
//subsciribing to specific cart item
  
  return(
  <div className="">
   <h1 className="font-bold mt-10 ">Cart</h1>
   <div className="flex ">{cartItems.map((item)=><FoodItem key={item.id} {...item}/>)}</div>
   <button className="bg-green-500 ml-40 rounded-lg h-8 w-16 mt-10 "  onClick= {() =>handleOrder()}>Confirm</button>
   <button className="bg-green-500 ml-40 rounded-lg h-8 w-12 mt-10"  onClick= {() =>handleClearCart()}>Clear </button>
   
   
  <Shimmer/>
  </div>)
};
export default Cart;
