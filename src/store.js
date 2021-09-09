import { createStore, combineReducers } from 'redux';

import weeksGridReducer from './reducers/weeksGrid'


const rootReducer = combineReducers({
  weeksGrid: weeksGridReducer
})

const store = createStore(
  rootReducer,
  //TODO: dev extension enhancer
)

export default store;
