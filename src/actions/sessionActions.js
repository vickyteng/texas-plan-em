import database from 'database/firebase';
import ActionList from 'actions/ActionList';

export const startSession = (session, userId) => ({
    type: ActionList.SESSION.START_SESSION,
    session,
    userId
});

export const startStartSession = name => (
    (dispatch) => database.ref('sessions').push({}).then(ref => {
        const session = ref.key;
        database.ref(`sessions/${session}/Users`).push({ name, moderator: true }).then(ref => {
            console.log(ref.key);
            dispatch(startSession(session, ref.key));
        });
    })
);