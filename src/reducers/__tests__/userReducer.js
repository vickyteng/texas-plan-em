import userReducer from 'reducers/userReducer';

describe('User Reducer', () => {

    it('should set default state', () => {
        expect(userReducer(undefined, {
            type: '@@INIT'
        })).toEqual({});
    });

    it('should set name', () => {
        expect(userReducer(undefined, {
            type: 'SET_USER_NAME',
            name: 'test'
        })).toEqual({
            name: 'test'
        });
    })

});