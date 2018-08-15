import * as sessionActions from 'actions/sessionActions';

describe('Session Actions', () => {
  it('should start session', () => {
    expect(sessionActions.startSession('abcd')).toEqual({
      type: 'START_SESSION',
      session: 'abcd',
    });
  });
});
