
import './GridLaneMarker.css';

const GridLaneMarker = (props) => {
  const { index, show } = props;
  return (
    <div
      className={
        show 
          ?  "grid-item grid-item--lane-marker grid-item--lane-marker--show" 
          :  "grid-item grid-item--lane-marker" 
      }
    >
      { show ? index : "" }
    </div>
  );
}

export default GridLaneMarker;
