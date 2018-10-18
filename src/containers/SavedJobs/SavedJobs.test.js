import React from 'react';
import { shallow } from 'enzyme';
import { SavedJobs } from './SavedJobs';

describe('SavedJobs', () => {
  let wrapper;
  let mockSaved = [{ 0: 52 }, { 1: 63 }, { 2: 67 }];
  let mockJobs = [
    {
      id: 121,
      description: 'A good job',
      company: 'DHI GROUP, INC.',
      location: 'GREATER DENVER AREA',
      status: 'none',
      job_title_id: 1
    },
    {
      id: 122,
      description: 'A good job',
      company: 'TRAVELERS HAVEN',
      location: 'GREATER DENVER AREA',
      status: 'saved',
      job_title_id: 2
    }
  ];
  let mockTypes = [
    {
      id: 1,
      job_title: 'Application Architect',
      average_salary: 85000
    },
    {
      id: 2,
      job_title: 'Software Engineer',
      average_salary: 75000
    }
  ];

  beforeEach(() => {
    wrapper = shallow(
      <SavedJobs
        jobs={mockJobs}
        jobTypes={mockTypes}
        savedJobs={mockSaved}
        removeJob={jest.fn()}
      />
    );
  });

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
