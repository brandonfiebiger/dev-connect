export const savedJobsReducer = (state = [], action) => {
  switch (action.type) {
  case 'SAVE_JOB':
    return [...state, action.job];
  case 'REMOVE_JOB': {
    const filteredJobs = state.filter(job => {
      return job !== action.job;
    });
    return filteredJobs;
  }
  default:
    return state;
  }
};
