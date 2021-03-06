export const addJobs = jobs => ({
  type: 'ADD_JOBS',
  jobs
});

export const addJobTypes = jobTypes => ({
  type: 'ADD_JOB_TYPES',
  jobTypes
});

export const addNewJobType = jobType => ({
  type: 'ADD_NEW_JOB_TYPE',
  jobType
});

export const addNewJob = job => ({
  type: 'ADD_NEW_JOB',
  job
});

export const saveJob = job => ({
  type: 'SAVE_JOB',
  job
});

export const removeJob = job => ({
  type: 'REMOVE_JOB',
  job
});
