import { combineReducers } from 'redux';
import { testReducer } from './testReducer';
import { jobsReducer } from './jobsReducer';


const rootReducer = combineReducers({
  testReducer,
  jobsReducer
})

export default rootReducer