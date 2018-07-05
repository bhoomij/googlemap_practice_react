import { combineReducers } from 'redux';
import trucksDataReducer from './trucks';

const rootReducer = combineReducers({
    trucksData: trucksDataReducer
});

export default rootReducer;