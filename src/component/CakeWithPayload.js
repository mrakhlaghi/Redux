import { useDispatch, useSelector } from "react-redux";
import buyCake from "../redux/cake/cakeActions";
import { useState } from "react";
const CakeWithPayload = (props) => {
  const [numbers, setNumbers] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  //  useSelector() -- has access automatically to all redux states
  const dispatch = useDispatch();
  //  useDispatch() -- has access automatically to all redux dispatches

  return (
    <div>
      <h2> number of cakes -{numOfCakes} </h2>
      <input type="number" onChange={(e) => setNumbers(e.target.value)} />
      <button onClick={() => dispatch(buyCake(numbers))}>
        {" "}
        buy {numbers} cake{" "}
      </button>
    </div>
  );
};
export default CakeWithPayload;
