import { combineReducers } from 'redux';

function programs(state = [], action) {
  switch (action.type) {
    case 'UPDATE_PROGRAMS':
      return action.programs
    default:
      return state
  }
}

export default combineReducers({
  programs
});