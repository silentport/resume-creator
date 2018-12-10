import {
  educationReducer,
  basicReducer,
  internReducer,
  jobReducer,
  skillReducer,
  awardReducer,
  commentReducer,
} from '../../pages/index/reducer/index';
import {combineReducers} from 'redux';

const reducer = combineReducers ({
  education: educationReducer,
  basic: basicReducer,
  intern: internReducer,
  job: jobReducer,
  skill: skillReducer,
  award: awardReducer,
  comment: commentReducer,
});
export default reducer;
