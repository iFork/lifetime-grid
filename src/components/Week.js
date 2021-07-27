import './Week.css';


function Week(props) {
  const { index, selectionState, setWeekSelection } = props;

  function handleClick(evt) {
    // evt.target.classList.toggle('week--selected');
    setWeekSelection((prevState) => {
      return prevState.map(
        (s, i) => i + 1 === index ? !selectionState : s
      );
    })
  }
  return (
    <div
      className={`
        grid-item
        week ${selectionState ? 'week--selected' : ''}`}
      onClick={handleClick}
    >
      {index}
    </div> 
  )
}

export default Week;
