export const postNewJobAndJobType = (state) => {
  let placholderId;
    const {
      jobType,
      jobTitle,
      company,
      location,
      salary,
      description
    } = state;

    fetch(process.env.REACT_APP_DATABASE_API_URL + '/api/v1/job-types', {
      method: 'POST',
      body: JSON.stringify({
        job_title: jobTitle,
        average_salary: salary
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(id => {
        jobType.id = id.id;
        this.props.addJobType({
          job_title: jobTitle,
          average_salary: salary,
          id: id.id
        });
      })
      .catch(error => console.log(error.error));

      fetch(process.env.REACT_APP_DATABASE_API_URL + '/api/v1/jobs', {
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
      })
        .then(response => response.json())
        .then(id => {
          this.props.addJob({
            id: id.id,
            company,
            description,
            location,
            status: 'none',
            job_title_id: jobType.id
          });
        })
        .catch(error => console.log(error));
   
}


export const postNewJobType = async (state) => {
  let returnId;
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