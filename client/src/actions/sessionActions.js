import ActionList from 'actions/ActionList';
import socket from 'socket';

export const startSession = (session, userId, moderator) => ({
    type: ActionList.SESSION.START_SESSION,
    session,
    userId,
    moderator
});

export function startStartSession (name) {
    return function (dispatch) {
        fetch(`/api/create-session`,  {
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
            console.error('Request failure: ', err)
        })
    }
}

export function startJoinSession (session, user) {
    let updateDatabase;
    const {id: userId, ...userInfo} = user;

        // if moderator   
        if (userId) {
            let postData = {
                sessionId: session,
                userId: userId,
                role: userInfo.role,
                name: userInfo.name
            }
            updateDatabase = dispatch => {
                socket.emit('join', postData);
                return Promise.resolve();
            }
            
        // if joining session from URL 
        } else {
            updateDatabase = dispatch =>
                fetch(`/api/join-session/${session}`, {
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
                    let postData = {
                        sessionId: session,
                        role: userInfo.role,
                        name: userInfo.name,
                        userId: responseData._userId
                    }
                    socket.emit('join-new-user', postData);
                    dispatch(startSession(session, responseData._userId));
                })
                .catch(function (err) {
                    console.error('Request failure: ', err)
                })
        }
    return updateDatabase;
}

export const leaveSession = (session, user) => {
    const postData = {
        session: session,
        user: user
    }
    socket.emit('leave', postData);
}