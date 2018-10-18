import React from 'react';
import { shallow, mount } from 'enzyme';
import { JobCard, mapDispatchToProps } from './JobCard';

describe('JobCard', () => {
  let wrapper;
  let mockCompany = 'Gusto';
  let mockLocation = 'Denver, CO';
  let mockType = 'UX Designer';
  let mockDescription = 'We are looking for a talented developer';
  let mockUpdateJob;

  beforeEach(() => {
    wrapper = shallow(
      <JobCard
        description={mockDescription}
        company={mockCompany}
        location={mockLocation}
        jobType={mockType}
        saveJob={jest.fn()}
        removeJob={jest.fn()}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call updateJobSaveStatus when button is clicked', () => {
    mockUpdateJob = jest.fn();

    wrapper = mount(
      <JobCard
        description={mockDescription}
        company={mockCompany}
        location={mockLocation}
        jobType={mockType}
        saveJob={jest.fn()}
        removeJob={jest.fn()}
        updateJobSaveStatus={mockUpdateJob}
      />
    );
    wrapper.find('.update-status-button').simulate('click');
    expect(mockUpdateJob).toHaveBeenCalled();
  });

  it('should call saveJob when the savedJobs array does not have its id', () => {
    let mockId = 52;

    wrapper = mount(
      <JobCard
        description={mockDescription}
        company={mockCompany}
        location={mockLocation}
        jobType={mockType}
        saveJob={jest.fn()}
        removeJob={jest.fn()}
        id={mockId}
        updateJobSaveStatus={mockUpdateJob}
        savedJobs={[]}
      />
    );

    wrapper.instance().handleJobStatus();
    expect(wrapper.props().saveJob).toHaveBeenCalledWith(mockId);
  });

  it('should call removeJob when the savedJobs array does have its id', () => {
    let mockId = 52;

    wrapper = mount(
      <JobCard
        description={mockDescription}
        company={mockCompany}
        location={mockLocation}
        jobType={mockType}
        saveJob={jest.fn()}
        removeJob={jest.fn()}
        id={mockId}
        updateJobSaveStatus={mockUpdateJob}
        savedJobs={[52]}
      />
    );

    wrapper.instance().handleJobStatus();
    expect(wrapper.props().removeJob).toHaveBeenCalledWith(mockId);
  });

  //   const result = await wrapper.instance().addFavoriteData(mockMovie);

  // expect(wrapper.props().deleteMovie).toHaveBeenCalledWith(mockMovie);
});
