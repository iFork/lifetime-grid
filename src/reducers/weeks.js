
function generateWeeks(num) {
  let weeks = Array(num).fill(null);
  return weeks.map((_, i) => {
    return {
      id: i, // TODO: unique ID
      selected: false,
      category: 'none',
      labels: [],
      content: `test ${i}`
    }
  }) 
}

const weeksInitialState = generateWeeks(52*7) ;

console.log({ weeksInitialState });
function weeksReducer(state = weeksInitialState, action) {
  switch (action.type) {
    case 'week/select':
      return state.map((w) => {
        return w.id === action.payload ? { ...w, selected: !w.selected } : w
      })
    default:
      console.log({ defaultState: state });
      return state;
  }
}

export default weeksReducer;

