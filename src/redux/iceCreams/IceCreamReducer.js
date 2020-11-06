import {BUY_ICECREAM} from './IceCreamTypes';
const initialStateIceCream={
    numOfIceCreams:20
}
const iceCreamReducer=(state=initialStateIceCream,action)=>{
    switch (action.type) {
        case BUY_ICECREAM: return{
            ...state,
            numOfIceCreams:state.numOfIceCreams-1
        }
        default:return state
    }
}
export default iceCreamReducer;