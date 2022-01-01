
const gridInitialState = {
  resolutionX: 52,
  resolutionY: 90
};

function grid(state = gridInitialState, action) {
  switch (action.type) {
    // TODO: test, yet not used action
    case 'grid/increaseResolutionX':
      return {
        ...state,
        resolutionX: state.resolutionX + action.payload
      }
    // TODO: decrease resolutionX, keeping resolutionY constant, 
    // it will affect resolutionFull
    default:
      return state;
  }
}

export default grid;
