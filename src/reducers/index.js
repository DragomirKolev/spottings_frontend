import spottingsReducer from './spottings';
import filtersReducer from './filters';

import { combineReducers } from 'redux';

export default combineReducers({
    spottingsReducer,
    filtersReducer,
})
