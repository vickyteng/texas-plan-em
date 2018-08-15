import * as userActions from 'actions/userActions';

describe('User Actions', () => {
  it('should setup edit user action object', () => {
    const updates = {
      name: 'Tester',
      moderator: true,
    };

    expect(userActions.editUser(updates)).toEqual({
      type: 'EDIT_USER',
      updates,
    });
  });
});
