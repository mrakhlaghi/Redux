import { BUY_CAKE } from "./cakeActionTypes";

//  action
export default function buyCake(numbers = 1) {
  return {
    type: BUY_CAKE,
    payload: numbers,
  };
}
