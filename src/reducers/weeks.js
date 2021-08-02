
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
    case 'weeks/toggleSelection':
      return state.map((w) => {
        return w.id === action.payload ? { ...w, selected: !w.selected } : w
      })
    case 'weeks/deselectAll':
      return state.map((w) => { return { ...w, selected: false } })
    default:
      console.log({ defaultState: state });
      return state;
  }
}

// action creator
function toggleSelection(weekId) {
  return {
    type: 'weeks/toggleSelection',
    payload: weekId
  }
}

function deselectAll() {
  return {
    type: 'weeks/deselectAll'
  }
}

export default weeksReducer;
export {
  toggleSelection,
  deselectAll,
};

