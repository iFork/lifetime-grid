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
          // Fix 0-base 
          const index = i + 1;
          const markerY = Math.ceil(index / resolutionX);
          return index === 1 
            ? <>
                <GridLaneMarker
                  key={index} 
                  index={markerY}
                  show="true"
                />
                <Week
                  key={index}
                  index={index}
                  selectionState={ss}
                  setWeekSelection={setWeekSelection} />
                {/* show={markerY % laneMarkerJump === 0 ? true : false} */}
            </>
            : index % (resolutionX + 1 ) === 0
            // brackets ?
            ? <>
              {/* FIXME coinciding keys, make KEYS unique ? */}
              {/* FIXME: staggering due to step bigger by 1 than resolutionX */ }
              {/* Note: cols increased by 1 in css grid template */}
                <GridLaneMarker
                  key={index} 
                  index={markerY}
                  show="true"
                />
                <Week
                  key={index}
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
