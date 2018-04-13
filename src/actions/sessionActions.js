import database from 'database/firebase';
import ActionList from 'actions/ActionList';

export const startSession = (session, userId) => ({
    type: ActionList.SESSION.START_SESSION,
    session,
    userId
});

export const startStartSession = name => (
    dispatch => database.ref('sessions').push({}).then(ref => {
        const session = ref.key;
        database.ref(`sessions/${session}/Users`).push({ name }).then(ref => {
            dispatch(startSession(session, ref.key));
        });
    })
);

export const startJoinSession = (session, user) => {
    let updateDatabase;
    const {id: userId, ...userInfo} = user;

    if (userId) {
        updateDatabase = dispatch => database.ref(`sessions/${session}/Users/${userId}`).set(userInfo);
    } else {
        updateDatabase = dispatch => database.ref(`sessions/${session}/Users`).push(userInfo).then(ref => {
            dispatch(startSession(session, ref.key));
        });
    }

    return updateDatabase;
};

export const leaveSession = (session, user) => {
    debugger;
    database.ref(`sessions/${session}/submitted/${user}`).remove();
    database.ref(`sessions/${session}/Users/${user}`).remove();
}