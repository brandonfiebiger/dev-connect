import { combineReducers } from 'redux';
import { testReducer } from './testReducer';
import { jobsReducer } from './jobsReducer';
import { jobTypesReducer } from './jobTypesReducer';


const rootReducer = combineReducers({
  testReducer,
  jobs: jobsReducer,
  jobTypes: jobTypesReducer
})

export default rootReducer