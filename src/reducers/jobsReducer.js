export const jobsReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_JOBS':
    return [...action.jobs];
  case 'ADD_NEW_JOB':
    return [...state, action.job];
  default:
    return state;
  }
};
