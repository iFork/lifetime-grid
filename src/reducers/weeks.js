
function generateWeeks(num) {
  let weeks = Array(num).fill(null);
  return weeks.map((_, i) => {
    return {
      id: i, // TODO: unique ID
      index: i + 1,
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
    case 'week/toggleSelection':
      return state.map((w) => {
        return w.id === action.payload ? { ...w, selected: !w.selected } : w
      })
    default:
      console.log({ defaultState: state });
      return state;
  }
}

// action creator
function toggleSelection(weekId) {
  return {
    type: 'week/toggleSelection',
    payload: weekId
  }
}

export default weeksReducer;
export { toggleSelection };

