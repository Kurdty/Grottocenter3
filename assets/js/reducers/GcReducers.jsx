import {combineReducers} from 'redux';
import {caves, entries, grottos, marker} from './SearchReducers';
import {auth} from './AuthenticationReducer';

export const GcReducers = combineReducers({
  caves,
  entries,
  grottos,
  marker,
  auth
});
export default GcReducers;
