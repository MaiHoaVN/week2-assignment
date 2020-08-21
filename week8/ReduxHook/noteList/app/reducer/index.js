import { combineReducers } from 'redux';
import noteReducer from './noteReducer';

const reducer = combineReducers({
    noteReducer,
})

export default reducer;