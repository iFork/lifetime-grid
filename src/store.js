import { createStore, combineReducers } from 'redux';

import weeksReducer from './reducers/weeks'


const rootReducer = combineReducers({
  weeks: weeksReducer
})

const store = createStore(
  rootReducer,
  //TODO: dev extension enhancer
)

export default store;
