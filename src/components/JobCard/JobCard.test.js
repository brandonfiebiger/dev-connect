import React from 'react';
import { shallow } from 'enzyme';
import { JobCard, mapDispatchToProps } from './JobCard';

describe('JobCard', () => {
  let wrapper;
  let mockCompany = 'Gusto';
  let mockLocation = '';

  beforeEach(() => {
    wrapper = shallow(<JobCard />);
  });
});
