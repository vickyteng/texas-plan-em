import React from 'react';
import { shallow } from 'enzyme';
import { CreateSession } from 'components/CreateSession';

describe('Join Session Component', () => {

  // pretty sure this is incorrect
  // Look at CreateSession test to see how to write this one 
  // or ask Matt Wong (he wrote the tests for CreateSession)
  it('should render a join session', () => {
    const component = shallow(<CreateSession session="xay"/>);

    expect(component.find('.join-session').length).toEqual(1);
  });

});
