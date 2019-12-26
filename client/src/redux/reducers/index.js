import { combineReducers } from 'redux';
import programSectionMap from './ProgramSectionMap';
import section from './Sections';
import programs from './Programs';

export default combineReducers({
  programSectionMap,
  programs,
  section
});