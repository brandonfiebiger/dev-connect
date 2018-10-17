import React from 'react';
import { shallow } from 'enzyme';
import { JobCard, mapDispatchToProps } from './JobCard';

describe('JobCard', () => {
  let wrapper;
  let mockCompany = 'Gusto';
  let mockLocation = 'Denver, CO';
  let mockType = 'UX Designer';
  let mockDescription = 'We are looking for a talented developer';

  beforeEach(() => {
    wrapper = shallow(
      <JobCard
        description={mockDescription}
        company={mockCompany}
        location={mockLocation}
        jobType={mockType}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
