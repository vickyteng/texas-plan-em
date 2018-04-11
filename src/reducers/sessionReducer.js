export default (state = '', action) => {
    switch (action.type) {
        case 'START_SESSION':
            return action.session;
        default:
            return state;
    }
}