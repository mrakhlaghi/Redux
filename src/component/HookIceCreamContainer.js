import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

const HookIceCreamContainer = (props) => {
  const iceCream = useSelector((state) => state.iceCream.numOfIceCream);
  console.log(iceCream);
  //  useSelector() -- has access automatically to all redux states
  const dispatch = useDispatch();
  //  useDispatch() -- has access automatically to all redux dispatches

  return (
    <div>
      <h2> number of cakes -{iceCream} </h2>
      <button onClick={() => dispatch(buyIceCream())}> buy iceCream </button>
    </div>
  );
};
export default HookIceCreamContainer;
