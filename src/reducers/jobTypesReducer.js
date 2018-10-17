export const jobTypesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_JOB_TYPES':
      return [...action.jobTypes];
    case 'ADD_NEW_JOB_TYPE':
      return [...state, action.jobType];
    default:
      return state;
  }
};
