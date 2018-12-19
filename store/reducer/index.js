import {
  educationReducer,
  basicReducer,
  internReducer,
  jobReducer,
  skillReducer,
  awardReducer,
  commentReducer,
  selectedReducer,
} from '../../pages/index/reducer/index';
import {
  combineReducers
} from 'redux';

const reducer = combineReducers({
  education: educationReducer,
  basic: basicReducer,
  intern: internReducer,
  job: jobReducer,
  skill: skillReducer,
  award: awardReducer,
  comment: commentReducer,
  selected: selectedReducer,
});
export default reducer;