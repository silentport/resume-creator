import educationReducer from '../../pages/index/reducer';
import {
    combineReducers,
} from 'redux';

const basicReducer = (state = {}, action) => {
    return state
}

const reducer = combineReducers({
    education: educationReducer,
    basic: basicReducer
});
export default reducer;