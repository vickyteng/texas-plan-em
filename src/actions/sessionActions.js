import database from 'database/firebase';
import ActionList from 'actions/ActionList';

export const startSession = (session, userId, moderator) => ({
    type: ActionList.SESSION.START_SESSION,
    session,
    userId,
    moderator
});

export const startStartSession = name => (
    dispatch => database.ref('sessions').push({}).then(ref => {
        const session = ref.key;
        database.ref(`sessions/${session}/Users`).push({ 
            name,
            moderator: true
        }).then(ref => {
            dispatch(startSession(session, ref.key, true));
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
    database.ref(`sessions/${session}/submitted/${user}`).remove();
    database.ref(`sessions/${session}/cardsUp`).remove();
    database.ref(`sessions/${session}/Users/${user}`).remove();
}