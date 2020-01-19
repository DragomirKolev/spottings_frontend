import store from '../store.js';
import axios from 'axios';

import { actions as spottingsActions } from './spottings';
import { actions as filtersActions } from './filter';

const API_ROOT = 'http://localhost:5001/api/v1';

const call = (method, path, actionTypes = [], data = null, options = null) => {
  axios({
    method,
    url: API_ROOT + path,
    data,
    options,
  })
  .then((response) => {
    actionTypes.length > 0 && 
      actionTypes.forEach((actionType) => 
        store.dispatch({type: actionType, data: response.data.response}))
  })
  .catch((error) => {
    console.log('error = ', error);
  })
};

export const API = {
  spottings: {
    get() {
      return call('GET', '/spottings', [spottingsActions.SET_SPOTTINGS, filtersActions.ADD_FILTER]);
    },
    delete() {
      return call('DELETE', '/spottings', [spottingsActions.DEL_SPOTTINGS]);
    },
    post(data) {
      return call('POST', '/spottings', [spottingsActions.ADD_SPOTTING], data);
    }
  },
};