export const postNewJob = async (state) => {
  const {
    jobType,
    jobTitle,
    company,
    location,
    salary,
    description
  } = state;
  const response = await fetch(process.env.REACT_APP_DATABASE_API_URL + '/api/v1/jobs', {
    method: 'POST',
    body: JSON.stringify({
      description,
      company,
      location,
      status: 'none',
      job_title_id: jobType.id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
   const jobId = await response.json();
   return jobId.id;
}


export const postNewJobType = async (state) => {
  const {
    jobType,
    jobTitle,
    company,
    location,
    salary,
    description
  } = state;
  const response = await fetch(process.env.REACT_APP_DATABASE_API_URL + '/api/v1/job-types', {
    method: 'POST',
    body: JSON.stringify({
      job_title: jobTitle,
      average_salary: salary
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const id = await response.json()
  return id.id
}

export const postNewJobWithNewJobType = async (state, jobTypeId) => {
  const {
    jobType,
    jobTitle,
    company,
    location,
    salary,
    description
  } = state;
  const response = await fetch(process.env.REACT_APP_DATABASE_API_URL + '/api/v1/jobs', {
    method: 'POST',
    body: JSON.stringify({
      description,
      company,
      location,
      status: 'none',
      job_title_id: jobTypeId
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const id = await response.json()
  return id.id
}