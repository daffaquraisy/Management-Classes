import {combineReducers} from 'redux';
import {registerReducer} from './auth';
import {globalReducer} from './global';
import {hwReducer} from './homeworks';

const reducer = combineReducers({registerReducer, globalReducer, hwReducer});

export default reducer;
