import React from 'react';
import { shallow } from 'enzyme';
import { StartSession } from 'components/StartSession';

describe('Start Session Component', () => {

    it('should render a container', () => {
        const component = shallow(<StartSession />);

        expect(component.find('Container').length).toEqual(1);
    });

    it('should render a row in the container', () => {
        const component = shallow(<StartSession />);

        expect(component.find('Container > Row').length).toEqual(1);
    });

    it('should render a sm 6 col with an offset of 3', () => {
        const component = shallow(<StartSession />);

        expect(component.find('Container > Row > Col').at(0).props().sm).toEqual({size: 6, offset:3});
    });

    it('should render a name input label', () => {
        const component = shallow(<StartSession />);

        expect(component.find('Label[for="name"]').childAt(0).text()).toEqual('Name');
    });

    it('should render a name input', () => {
        const component = shallow(<StartSession />);

        expect(component.find('Input#name').length).toEqual(1);
    });

    it('should render start session button', () => {
        const component = shallow(<StartSession />);

        expect(component.find('Button#start-session').childAt(0).text()).toEqual('Start Session');
    });

    it('should not render start session button when there is a session', () => {
        const component = shallow(<StartSession session="xyz" />);

        expect(component.find('Button#start-session').length).toEqual(0);
    });

    it('should render the session url label when there is a session', () => {
        const component = shallow(<StartSession session="xyz" />);

        expect(component.find('Label[for="session-url"]').childAt(0).text()).toEqual('Url');
    });

    it('should render the session url when there is a session', () => {
        const component = shallow(<StartSession session="xyz" />);

        expect(component.find('Input#session-url').length).toEqual(1);
    });

    it('should render the session url as plaintext when there is a session', () => {
        const component = shallow(<StartSession session="xyz" />);

        expect(component.find('Input#session-url').props().plaintext).toEqual(true);
    });

    it('should render the session url with the correct url when there is a session', () => {
        const component = shallow(<StartSession session="xyz" />);

        expect(component.find('Input#session-url').childAt(0).text()).toEqual(`${window.location.origin}/session/xyz`);
    });

    it('should render the join button when there is a session', () => {
        const component = shallow(<StartSession session="xyz" />);

        expect(component.find('Button#join-session').childAt(0).text()).toEqual('Join Session');
    });

    it('should render an \'Are you Participating or Observing?\' radio group when there is a session', () => {
        const component = shallow(<StartSession session="xyz" />);

        expect(component.find('FormGroup[tag="fieldset"] > legend').childAt(0).text()).toEqual('Are you Participating or Observing?');
    });

    it('should render an \'Are you Participating or Observing?\' radio group with a Participant radio when there is a session', () => {
        const component = shallow(<StartSession session="xyz" />);

        expect(component.find('Input[type="radio"][name="user-type"]#participant').length).toEqual(1);
    });

    it('should render the Participant radio label when there is a session', () => {
        const component = shallow(<StartSession session="xyz" />);

        expect(component.find('Label[for="participant"]').childAt(0).text()).toEqual('Participant');
    });

    it('should render an \'Are you Participating or Observing?\' radio group with a Observer radio when there is a session', () => {
        const component = shallow(<StartSession session="xyz" />);

        expect(component.find('Input[type="radio"][name="user-type"]#observer').length).toEqual(1);
    });

    it('should render the Observer radio label when there is a session', () => {
        const component = shallow(<StartSession session="xyz" />);

        expect(component.find('Label[for="observer"]').childAt(0).text()).toEqual('Observer');
    });

});