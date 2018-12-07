import {educationReducer, basicReducer} from '../../pages/index/reducer/index';
import {combineReducers} from 'redux';

const reducer = combineReducers ({
  education: educationReducer,
  basic: basicReducer,
});
export default reducer;
