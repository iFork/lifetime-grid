import { useDispatch } from 'react-redux';

import { toggleSelection } from '../reducers/weeksGrid';

import './Week.css';


function Week(props) {
  const { storedState } = props;
  // const { index, selectionState, setWeekSelection } = props;
  const dispatch = useDispatch();

  function handleClick(evt) {
    dispatch(toggleSelection(storedState.id));
  }
  return (
    <div
      className={`
        grid-item
        week ${storedState.selected ? 'week--selected' : ''}`}
      onClick={handleClick}
    >
      {storedState.content}
    </div> 
  )
}

export default Week;
