// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import database from 'database/firebase';
import * as userActions from 'actions/userActions';

// const createMockStore = configureMockStore([thunk]);

describe('User Actions', () => {

    it('should setup edit user action object', () => {
        const updates = {
            name: 'Tester',
            moderator: true
        };

        expect(userActions.editUser(updates)).toEqual({
            type: 'EDIT_USER',
            updates: updates
        });
    });

});