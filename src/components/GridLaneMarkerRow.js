import React from 'react';
import GridLaneMarker from './GridLaneMarker';

export default function GridLaneMarkerRow({rowLength, laneMarkerJump}) {
  let row = Array.from(Array(rowLength));
  // let row = Array(rowLength).fill(null);
  return row.map((_, i) => {
    return (
      <GridLaneMarker
        key={i}
        index={i}
        show={i === 0 ? "" : i % laneMarkerJump === 0 ? true : false} />
    );
  });
}

