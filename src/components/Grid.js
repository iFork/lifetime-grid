import React, { useState } from 'react';

import Week from './Week';

import './Grid.css';
import GridLaneMarker from './GridLaneMarker';

function Grid() {

  const rowLength = 52;
  const laneMarkerJump = 5;
  const nodes = rowLength*5;

  // NOTE: Array(num) creates a sparse array and map() ignores empty slots of
  // sparse array. Array.apply(aSparseArray) creates a non-sparse array to
  // work with map().
  // Array.apply(null, Array(num)).map(() => false)

  const weeksSelectionInitialStates = Array(nodes).fill(false);

  // TODO: HOWTO? wrap / put lane markers
  //
  // GridRow length="" 
  // GridRowTop length=""
  // GridRowMarked rowNum={} OR GridRow marked="true"
  // LaneMarkerX jump/step="5"
  // LaneMarkerY jump/step="5"
  // Week | Day | Month | Year
  //

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
      {Array.apply(null, Array(rowLength)).map((_v, i) => 
        {
          const index = i +1;
          return(
            <GridLaneMarker
              key={i} 
              index={index}
              show={index % laneMarkerJump === 0 ? true : false}
            />
          )
        })
      }
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
