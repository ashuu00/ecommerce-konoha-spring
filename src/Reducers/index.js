import {combineReducers} from 'redux'
import {userReducer,cartReducer, categoryReducer, productFormReducer} from './Reducers';

const rootReducers=combineReducers({
    user:userReducer,
    cart:cartReducer,
    category:categoryReducer,
    product:productFormReducer
});

export default rootReducers;