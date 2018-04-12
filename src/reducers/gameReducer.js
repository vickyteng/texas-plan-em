let initialState = {
  selectedValue: undefined,
  values: [1, 2, 3, 5, 8, 13, "?"],
  players: 1,
  table: [],
  cardsUp: false,
  submitted: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_CARD':
      return {
        ...state,
        values: state.values.filter(val => val !== action.value),
        table: [...table, action.value],
        submitted: true
      }
    case 'SELECT_CARD':
      return {
        ...state,
        selectedValue: action.value
      }
    case 'FLIP_CARDS':
      return {
        ...state,
        cardsUp: true
      }
    case 'CLEAR_TABLE':
      return {...initialState}
    default:
        return state;
  }
}