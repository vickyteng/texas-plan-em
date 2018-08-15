import ActionList from 'actions/ActionList';

export default (state = '', action) => {
  switch (action.type) {
    case ActionList.SESSION.START_SESSION:
      return action.session;
    default:
      return state;
  }
};
