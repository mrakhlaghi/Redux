import { useDispatch, useSelector } from "react-redux";
import buyCake from "../redux/cake/cakeActions";
const HookCakeContainer = (props) => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  //  useSelector() -- has access automatically to all redux states
  const dispatch = useDispatch();
  //  useDispatch() -- has access automatically to all redux dispatches

  return (
    <div>
      <h2> number of cakes -{numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}> buy cake </button>
    </div>
  );
};
export default HookCakeContainer;
