import {BUY_CAKE} from '../actionTypes/cakeTypes';
const buyCake=(number=1)=>{
    return{
        type:BUY_CAKE,
        payload:number
    }
}
export {buyCake};