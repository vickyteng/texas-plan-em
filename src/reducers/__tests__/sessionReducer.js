import sessionReducer from 'reducers/sessionReducer';

describe('Session Reducer', () => {

    it('should set default state', () => {
        expect(sessionReducer(undefined, {
            type: '@@INIT'
        })).toEqual('');
    });

    it('should start a session', () => {
        expect(sessionReducer(undefined, {
            type: 'START_SESSION',
            session: 'abcd'
        })).toEqual('abcd');
    });

});