import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deselectAll } from '../reducers/weeks';

import Week from './Week';

import './Grid.css';
import GridLaneMarker from './GridLaneMarker';
import GridLaneMarkerRow from './GridLaneMarkerRow';

function Grid() {

  // TODO: move resolution states to store
  const resolutionX = 52;
  // const resolutionFull = 
  const resolutionY = 2; // years
  // number of columns allocated for markers for horizontal lanes, i.e.
  // span of 1st (marker) column
  const laneXMarkerLength = 1;
  // NOTE: Dependency: css should have the same rowLength in its
  // grid-template-columns declaration
  const rowLength = laneXMarkerLength + resolutionX;
  const laneMarkerJump = 5;
  const resolutionFull = resolutionX * resolutionY;
  // TODO: make css using resolution numbers in-line and using vars.

  // TODO: consider multiple hooks - 1 for each field or 1 returning/creating an
  // aggregate state object. Last approach may cause redundant re-renders.
  const weeks = useSelector((rootState) => rootState.weeks);
  const dispatch = useDispatch();

  // Note: optimization opportunity - move out func passing dispatch as argument
  function handleKeyDown(evt) {
    console.log(evt.key);
    switch (evt.key) {
      case 'Escape':
        dispatch(deselectAll());
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
          // NOTE: return <React.Fragment> (long form of `<>` tag)
          // which can accept key prop and does not mess up with the grid
          // structure.
          //
          // TODO: clean out/refactor offset Magic Numbers (1-s).
          // Now index of 1st elem of each row is multiple of resolutionX,
          // and index of 1st elem on 2nd row is = 52.
          return i % (resolutionX) === 0
            // brackets ?
              ? <React.Fragment
                key={i} 
              >
                <GridLaneMarker
                  index={Math.ceil(i / resolutionX) + 1}
                  show="true"
                />
                {/* show={markerY % laneMarkerJump === 0 ? true : false} */}
                <Week
                  storedState={w}
                />
            </React.Fragment>
            : <Week
                  key={i}
                  storedState={w}
              />

        }
      )}

    </div>
  )
}

export default Grid;
