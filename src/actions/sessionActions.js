import database from 'database/firebase';

export const startSession = session => ({
    type: 'START_SESSION',
    session
});

export const startStartSession = name => (
    (dispatch) => database.ref('sessions').push({}).then(ref => {
        const session = ref.key;
        database.ref(`sessions/${session}/Users`).push({ name, moderator: true }).then(ref => {
            dispatch(startSession(session));
        });
    })
);