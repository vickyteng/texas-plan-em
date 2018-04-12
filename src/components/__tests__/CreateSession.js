import React from 'react';
import { shallow } from 'enzyme';
import { CreateSession } from 'components/CreateSession';

describe('Start Session Component', () => {

    it('should render a create session', () => {
        const component = shallow(<CreateSession />);

        expect(component.find('.create-session').length).toEqual(1);
    });

    it('should render a session card', () => {
        const component = shallow(<CreateSession />);

        expect(component.find('.session-card').length).toEqual(1);
    });

    it('should render a session card title as "Create New Game"', () => {
        const component = shallow(<CreateSession />);

        expect(component.find('.session-card-title h3').childAt(0).text()).toEqual('Create New Game');
    });

    it('should render a session card body', () => {
        const component = shallow(<CreateSession />);

        expect(component.find('.session-card-body').length).toEqual(1);
    });

    it('should render a name input in the session card body', () => {
        const component = shallow(<CreateSession />);

        expect(component.find('.session-card-body Row > Col Input#name').length).toEqual(1);
    });

    it('should render the session url in the session card body', () => {
        const component = shallow(<CreateSession />);

        expect(component.find('.session-card-body Row > Col SessionUrl').length).toEqual(1);
    });
    
    it('should render an \'Are you Participating or Observing?\' radio group in the session card body when there is a session', () => {
        const component = shallow(<CreateSession session="xyz" />);

        expect(component.find('.session-card-body Row > Col FormGroup[tag="fieldset"] > legend').childAt(0).text()).toEqual('Are you Participating or Observing?');
    });

    it('should render an \'Are you Participating or Observing?\' radio group in the session card body with a Participant radio when there is a session', () => {
        const component = shallow(<CreateSession session="xyz" />);

        expect(component.find('.session-card-body Row > Col Input[type="radio"][name="user-type"]#participant').length).toEqual(1);
    });

    it('should render the Participant radio label in the session card body when there is a session', () => {
        const component = shallow(<CreateSession session="xyz" />);

        expect(component.find('.session-card-body Row > Col Label[for="participant"]').childAt(0).text()).toEqual('Participant');
    });

    it('should render an \'Are you Participating or Observing?\' radio group with a Observer radio in the session card body when there is a session', () => {
        const component = shallow(<CreateSession session="xyz" />);

        expect(component.find('.session-card-body Row > Col Input[type="radio"][name="user-type"]#observer').length).toEqual(1);
    });

    it('should render the Observer radio label in the session card body when there is a session', () => {
        const component = shallow(<CreateSession session="xyz" />);

        expect(component.find('.session-card-body Row > Col Label[for="observer"]').childAt(0).text()).toEqual('Observer');
    });

    it('should render a session card footer', () => {
        const component = shallow(<CreateSession />);

        expect(component.find('.session-card-footer').length).toEqual(1);
    });

    it('should render start session button in the session card footer', () => {
        const component = shallow(<CreateSession />);

        expect(component.find('.session-card-footer Row > Col > Button#start-session').childAt(0).text()).toEqual('Start Session');
    });

    it('should not render start session button in the session card footer when there is a session', () => {
        const component = shallow(<CreateSession session="xyz" />);

        expect(component.find('.session-card-footer Row > Col > Button#start-session').length).toEqual(0);
    });

    it('should render the join button in the session card footer when there is a session', () => {
        const component = shallow(<CreateSession session="xyz" />);

        expect(component.find('.session-card-footer Row > Col > Button#join-session').childAt(0).text()).toEqual('Join Session');
    });

});