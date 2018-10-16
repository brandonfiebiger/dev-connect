export const jobTypesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_JOB_TYPES':
      return action.jobTypes;
    default: 
      return state;
  }
}