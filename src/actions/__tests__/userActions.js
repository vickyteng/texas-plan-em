// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import database from 'database/firebase';
import * as userActions from 'actions/userActions';

// const createMockStore = configureMockStore([thunk]);

describe('User Actions', () => {
    
    it('should set user name', () => {
        expect(userActions.setUserName('tester')).toEqual({
            type: 'SET_USER_NAME',
            name: 'tester'
        })
    });

});