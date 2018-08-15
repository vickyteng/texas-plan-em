import React from 'react';
import { shallow } from 'enzyme';
import { CreateSession } from 'components/CreateSession';

// describe('Session Url Component', () => {

//     it('should render the session url when there is a session', () => {
//         const component = shallow(<SessionUrl session="xyz" />);

//         expect(component.find('Input#session-url').length).toEqual(1);
//     });

//     it('should render the readOnly session url when there is a session', () => {
//         const component = shallow(<SessionUrl session="xyz" />);

//         expect(component.find('Input#session-url[readOnly]').length).toEqual(1);
//     });

//     it('should render the readOnly session url with the correct url in the session card body when there is a session', () => {
//         const component = shallow(<SessionUrl session="xyz" />);

//         expect(component.find('Input#session-url[readOnly]').props().value).toEqual(`${window.location.origin}/session/xyz`);
//     });

//     it('should not render the session url whtn there is no session', () => {
//         const component = shallow(<SessionUrl />);

//         expect(component.find('Input#session-url').length).toEqual(0);
//     });

// });
describe('Join Session Component', () => {


  it('should render a join session', () => {
    const component = shallow(<CreateSession session="xay"/>);

    expect(component.find('.join-session').length).toEqual(0);
  });

});