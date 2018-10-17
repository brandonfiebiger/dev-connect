import { combineReducers } from 'redux';
import { jobsReducer } from './jobsReducer';
import { jobTypesReducer } from './jobTypesReducer';
import { savedJobsReducer } from './savedJobsReducer';

const rootReducer = combineReducers({
  jobs: jobsReducer,
  jobTypes: jobTypesReducer,
  savedJobs: savedJobsReducer
});

export default rootReducer;
