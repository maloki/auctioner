import {combineReducers} from 'redux';
import listReducer from './list_reducer';
import tagReducer from './tag_reducer';

const rootReducer = combineReducers({list: listReducer, tag: tagReducer});

export default rootReducer;
