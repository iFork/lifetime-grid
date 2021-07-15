import React, { useState } from 'react';

import Week from './Week';

import './Grid.css';


function Grid() {

  const nodes = 4*12;

  // NOTE: Array(num) creates a sparse array and map() ignores empty slots of
  // sparse array. Array.apply(aSparseArray) creates a non-sparse array to
  // work with map().
  // Array.apply(null, Array(num)).map(() => false)

  const weeksSelectionInitialStates = Array(nodes).fill(false);

  const [ weeksSelection, setWeekSelection ] = useState(
    weeksSelectionInitialStates
  ); 

  function handleKeyDown(evt) {
    console.log(evt.key);
    switch (evt.key) {
      case 'Escape':
        setWeekSelection(weeksSelectionInitialStates);
        break;
      default:
        break;
    }
  }

  return (
    <div
      className="grid"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {weeksSelection.map((ss, i) =>  
        <Week
          key={i}
          index={i}
          selectionState={ss}
          setWeekSelection={setWeekSelection} />
      )}

    </div>
  )
}

export default Grid;
