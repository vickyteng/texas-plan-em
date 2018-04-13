import React from 'react';
import { shallow } from 'enzyme';
import { CreateSession } from 'components/CreateSession';

describe('Start Session Component', () => {

    it('should render a create session', () => {
        const component = shallow(<CreateSession />);

        expect(component.find('.create-session').length).toEqual(1);
    });

    it('should render an outer create session card', () => {
        const component = shallow(<CreateSession />);

        expect(component.find('.card.create-session-outer').length).toEqual(1);
    });

    it('should render the top section of the ourer create session card', () => {
        const component = shallow(<CreateSession />);

        expect(component.find('.card.create-session-outer > .top').length).toEqual(1);
    });

    it('should render the title in the top section of the outer create session card', () => {
        const component = shallow(<CreateSession />);

        expect(component.find('.card.create-session-outer > .top > h1').childAt(0).text()).toEqual('Texas Plan \'em');
    });

    it('should render the bottom section of the ourer create session card', () => {
        const component = shallow(<CreateSession />);

        expect(component.find('.card.create-session-outer > .bottom').length).toEqual(1);
    });

    it('should render an inner create session card in the bottom sectio ofr the outer create session card', () => {
        const component = shallow(<CreateSession />);

        expect(component.find('.card.create-session-outer > .bottom > .card.create-session-inner').length).toEqual(1);
    });

    it('should render a name input in the inner create session card', () => {
        const component = shallow(<CreateSession />);

        expect(component.find('.card.create-session-inner TextField#name').length).toEqual(1);
    });

    it('should render a session url in the inner create session card when there is a session', () => {
        const component = shallow(<CreateSession session="xyz" />);

        expect(component.find('.card.create-session-inner TextField#url').length).toEqual(1);
    });

    it('should render a session url that is readOnly in the inner create session card when there is a session', () => {
        const component = shallow(<CreateSession session="xyz" />);

        expect(component.find('.card.create-session-inner TextField#url').props().inputprops.readOnly).toEqual(true);
    });

    it('should render a role radio group in the session card body when there is a session', () => {
        const component = shallow(<CreateSession session="xyz" />);

        expect(component.find('.card.create-session-inner RadioButtonGroup[name="role"]').length).toEqual(1);
    });

    it('should render a Participant radio in the role radio group in the session card body when there is a session', () => {
        const component = shallow(<CreateSession session="xyz" />);

        expect(component.find('.card.create-session-inner RadioButtonGroup[name="role"] > RadioButton[value="Participant"][label="Participant"]').length).toEqual(1);
    });
    

    it('should render a Observer radio in the role radio group in the session card body when there is a session', () => {
        const component = shallow(<CreateSession session="xyz" />);

        expect(component.find('.card.create-session-inner RadioButtonGroup[name="role"] > RadioButton[value="Observer"][value="Observer"]').length).toEqual(1);
    });

    it('should render start session button in the inner create session card when there is a session', () => {
        const component = shallow(<CreateSession />);

        expect(component.find('.card.create-session-inner button#start-session').childAt(0).text()).toEqual('Start Session');
    });

    it('should not render start session button in the inner create session card when there is a session', () => {
        const component = shallow(<CreateSession session="xyz" />);

        expect(component.find('.card.create-session-inner button#start-session').length).toEqual(0);
    });

    it('should render join session button in the inner create session card when there is a session', () => {
        const component = shallow(<CreateSession session="xyz" />);

        expect(component.find('.card.create-session-inner button#join-session').childAt(0).text()).toEqual('Join Session');
    });

});