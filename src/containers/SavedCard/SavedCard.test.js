import React from 'react';
import { shallow } from 'enzyme';
import { SavedCard } from './SavedCard';

describe('SavedCard', () => {
  let wrapper;
  let mockCompany = 'Gusto';
  let mockLocation = 'Denver, CO';
  let mockType = 'UX Designer';
  let mockStatus = 'none';
  let mockDescription = 'We are looking for a talented developer';

  beforeEach(() => {
    wrapper = shallow(
      <SavedCard
        description={mockDescription}
        company={mockCompany}
        location={mockLocation}
        title={mockType}
        status={mockStatus}
        id={55}
        removeJob={jest.fn()}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
