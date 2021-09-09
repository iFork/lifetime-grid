
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

const gridInitialState = {
  resolutionX: 52,
  resolutionY: 5
};

const initialState = {
  grid: gridInitialState,
  weeks: generateWeeks(
    gridInitialState.resolutionX * gridInitialState.resolutionY
  ),
};

// NOTE: Combine weeks and grid states slices into a single reducer to make
// resolution state accessible from the weeks slice.
// The other workaround is accessing the store state inside a redux-thunk
// with its getState() call and sharing the state to another slice via
// dispatch().
function weeksGridReducer(state = initialState, action) {
  switch (action.type) {
    // TODO: test, yet not used action
    case 'grid/increaseResolutionX':
      return {
        ...state,
        grid: {
          ...state.grid,
          resolutionX: state.resolutionX + action.payload
        }
      }
    // TODO: decrease resolutionX, keeping resolutionY constant, 
    // it will affect resolutionFull
    
    case 'weeks/toggleSelection':
      return {
        ...state,
        weeks: state.weeks.map((w) => {
          return w.id === action.payload ? { ...w, selected: !w.selected } : w
        })}
    case 'weeks/deselectAll':
      return {
        ...state,
        weeks: state.weeks.map((w) => {
          return { ...w, selected: false }
        })}
    default:
      // Q: Why default case of the reducer is run 3 times on page load? 
      // I expected 1 time - for store initialization.
      // console.log({ defaultState: state });
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

export default weeksGridReducer;
export {
  toggleSelection,
  deselectAll,
};

