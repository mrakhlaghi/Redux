import { BUY_IceCream } from "./iceCreamActionTypes";
const initialState={
    numOfIceCream:10
}
const IceCreamReducer=(state= initialState ,action)=>{
    switch(action.type){    
        case  BUY_IceCream:
            return {...state , numOfIceCream: state.numOfIceCream -1}
            default :return state
    }
}
export default IceCreamReducer;