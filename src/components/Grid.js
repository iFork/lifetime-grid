import React, { useState } from 'react';

import Week from './Week';

import './Grid.css';
import GridLaneMarker from './GridLaneMarker';

function Grid() {

  const resolutionX = 52;
  // const resolutionFull = 
  const resolutionY = 6; // years
  const laneXMarkerLength = 1;
  const rowLength = laneXMarkerLength + resolutionX;
  const laneMarkerJump = 5;
  // const nodes = rowLength*6;
  const resolutionFull = resolutionX * resolutionY;


  // NOTE: Array(num) creates a sparse array and map() ignores empty slots of
  // sparse array. Array.apply(aSparseArray) creates a non-sparse array to
  // work with map().
  // Array.apply(null, Array(num)).map(() => false)

  const weeksSelectionInitialStates = Array(resolutionFull).fill(false);

  // TODO: HOWTO? wrap / put lane markers
  //
  // GridRow length="" 
  // GridRowTop length=""
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
          // FIXME: offset start by 1
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
        {
          const index = i + 1;
          // FIXME: Refactor: markerY needs to be calculated every resolutionX-th step
          // TODO: clean out/refactor offset Magic Numbers (1-s).
          // Now index of 1st elem of each row is multiple of resolutionX,
          // and index of 1st elem on 2nd row is = 52.
          const markerY = Math.ceil(i / resolutionX) + 1;
          return i % (resolutionX) === 0
            // brackets ?
            ? <>
              {/* FIXME coinciding keys, make KEYS unique ? */}
                <GridLaneMarker
                  key={i} 
                  index={markerY}
                  show="true"
                />
                <Week
                  key={i}
                  index={index}
                  selectionState={ss}
                  setWeekSelection={setWeekSelection} />
                {/* show={markerY % laneMarkerJump === 0 ? true : false} */}
            </>
            : <Week
                  key={index}
                  index={index}
                  selectionState={ss}
                  setWeekSelection={setWeekSelection} />

        }
      )}

    </div>
  )
}

export default Grid;
