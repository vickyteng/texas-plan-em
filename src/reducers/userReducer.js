export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER_NAME':
            return {
                ...state,
                name: action.name
            }
        default:
            return state;
    }
}