import userReducer from 'reducers/userReducer';

describe('User Reducer', () => {

    it('should set default state', () => {
        expect(userReducer(undefined, {
            type: '@@INIT'
        })).toEqual({});
    });

    it('should edit user', () => {
        const updates = {
            name: 'Tester'
        }
        expect(userReducer({
            name: 'abc',
            moderator: true
        }, {
            type: 'EDIT_USER',
            updates
        })).toEqual({
            name: 'Tester',
            moderator: true
        });
    });

    it('should set user id when starting session', () => {
        expect(userReducer({
            name: 'Tester'
        }, {
            type: 'START_SESSION',
            session: 'abcd',
            userId: 'xyz'
        })).toEqual({
            name: 'Tester',
            id: 'xyz'
        })
    });

});