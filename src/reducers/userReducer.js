const editUser = (state, action) => ({
  ...state,
  ...action.updates,
});

export default (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_USER':
      return editUser(state, action);
    case 'START_SESSION':
      return editUser(state, { updates: { id: action.userId, moderator: action.moderator } });
    default:
      return state;
  }
};
