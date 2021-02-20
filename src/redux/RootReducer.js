import {combineReducers} from 'redux';
import cakeReducer from '../reducers/cakeReducer';
import iceCreamReducer from '../reducers/IceCreamReducer';
import UserReducer from './user/UserReducer';
const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user:UserReducer
})
export default rootReducer;
