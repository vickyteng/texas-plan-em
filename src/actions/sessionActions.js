import database from 'database/firebase';
import ActionList from 'actions/ActionList';

export const startSession = (session, userId, moderator) => ({
    type: ActionList.SESSION.START_SESSION,
    session,
    userId,
    moderator
});
/*
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
*/

export function startStartSession (name) {
    return function (dispatch) {
        fetch('http://localhost:3005/api/create-session',  {
            method: 'post',
            body: `name=${name}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((responseData) => {
            dispatch(startSession(responseData._sessionId, responseData._userId, true))
        })
        .catch(function (err) {
            console.log('Request failure: ', err)
        })
    }
}

export function startJoinSession (session, user) {
    let updateDatabase;
    const {id: userId, ...userInfo} = user;

    // if moderator    
    if (userId) {
        updateDatabase = dispatch =>
        fetch(`http://localhost:3005/api/join-session/${session}`, {
            method: 'put',
            body: `role=${userInfo.role}&name=${userInfo.name}&userId=${userId}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then((response) => {
            return response.json();
        })
        .catch(function (err) {
            console.log('Request failure: ', err)
        })
        database.ref(`sessions/${session}/Users/${userId}`).set(userInfo);
    // if joining session from URL 
    } else {
        updateDatabase = dispatch =>
        fetch(`http://localhost:3005/api/join-session/${session}`, {
            method: 'put',
            body: `role=${userInfo.role}&name=${userInfo.name}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((responseData) => {
            dispatch(startSession(session, responseData._userId))
        })
        .catch(function (err) {
            console.log('Request failure: ', err)
        })
    }
    
    return updateDatabase;
}


/*export const startJoinSession = (session, user) => {
    let updateDatabase;
    const {id: userId, ...userInfo} = user;
    
    //moderator
    console.log(userInfo)
    if (userId) {
        updateDatabase = dispatch => database.ref(`sessions/${session}/Users/${userId}`).set(userInfo);
        
    }
    //if there's a link, has session ID, no user ID
    else {
        updateDatabase = dispatch => database.ref(`sessions/${session}/Users`).push(userInfo).then(ref => {
            dispatch(startSession(session, ref.key));
        });
    }

    return updateDatabase;
};*/


export const leaveSession = (session, user) => {
    database.ref(`sessions/${session}/submitted/${user}`).remove();
    database.ref(`sessions/${session}/cardsUp`).remove();
    database.ref(`sessions/${session}/Users/${user}`).remove();
}