import database from 'database/firebase';
import ActionList from 'actions/ActionList';
import io from "socket.io-client"


var server = process.env.REACT_APP_LOCAL_SERVER;

export const startSession = (session, userId, moderator) => ({
    type: ActionList.SESSION.START_SESSION,
    session,
    userId,
    moderator
});

export function startStartSession (name) {
    return function (dispatch) {
        fetch(`${server}/api/create-session`,  {
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
    let socket;

    socket = io.connect("http://localhost:3005")
        socket.on('connect', function(data) {
             socket.emit('join', 'Hello World from client'); 
            });

    // if moderator    
    if (userId) {
        updateDatabase = dispatch =>
        fetch(`${server}/api/join-session/${session}`, {
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
        fetch(`${server}/api/join-session/${session}`, {
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

export const leaveSession = (session, user) => {
    database.ref(`sessions/${session}/submitted/${user}`).remove();
    database.ref(`sessions/${session}/cardsUp`).remove();
    database.ref(`sessions/${session}/Users/${user}`).remove();
}