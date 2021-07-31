import React from 'react';
// TODO: useDispatch too
import { useSelector } from 'react-redux';

import Week from './Week';

import './Grid.css';
import GridLaneMarker from './GridLaneMarker';
import GridLaneMarkerRow from './GridLaneMarkerRow';

function Grid() {

  const resolutionX = 52;
  // const resolutionFull = 
  const resolutionY = 6; // years
  // number of columns allocated for markers for horizontal lanes, i.e.
  // span of 1st (marker) column
  const laneXMarkerLength = 1;
  // NOTE: Dependency: css should have the same rowLength in its
  // grid-template-columns declaration
  const rowLength = laneXMarkerLength + resolutionX;
  const laneMarkerJump = 5;
  const resolutionFull = resolutionX * resolutionY;

  // TODO: consider multiple hooks - 1 for each field or 1 returning/creating an
  // aggregate state object. Last approach may cause redundant re-renders.
  const weeks = useSelector((rootState) => rootState.weeks);


  function handleKeyDown(evt) {
    console.log(evt.key);
    switch (evt.key) {
      case 'Escape':
        // setWeekSelection(weeksSelectionInitialStates);
        // TODO: dispatch action
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
      <GridLaneMarkerRow
        rowLength={rowLength}
        laneMarkerJump={laneMarkerJump} />

      {weeks.map((w, i) => 
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
                  selectionState={w.selected}
                />
                  {/* TODO: dispatch in place of state setters */}
                  {/* setWeekSelection={setWeekSelection}  */}
                  {/* show={markerY % laneMarkerJump === 0 ? true : false} */}
            </>
            : <Week
                  key={index}
                  index={index}
                  selectionState={w.selected}
              />
                  // setWeekSelection={setWeekSelection} 

        }
      )}

    </div>
  )
}

export default Grid;
