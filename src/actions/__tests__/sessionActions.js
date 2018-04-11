// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import database from 'database/firebase';
import * as sessionActions from 'actions/sessionActions';

// const createMockStore = configureMockStore([thunk]);

describe('Session Actions', () => {
    
    it('should start session', () => {
        expect(sessionActions.startSession('abcd')).toEqual({
            type: 'START_SESSION',
            session: 'abcd'
        })
    });

});

/* describe('Async Session Actions', () => {

    it('should start sesssion', () => {
        const store = createMockStore({});

        store.dispatch(sessionActions.startStartSession('Tester')).then(() => {
            const actions = store.getActions();
            console.log(actions);

            expect(actions[0]).toEqual({
                type: 'tes'
            })
        })
    });

}); */