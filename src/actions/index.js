import store from '../store.js';
import axios from 'axios';

import { actions as spottingsActions } from './spottings';
import { actions as filtersActions } from './filter';

const callActions = ( actionTypes, data ) => actionTypes.length > 0
    && actionTypes.forEach((actionType) =>
        store.dispatch({type: actionType, data: data.response}));

const API_ROOT = 'http://localhost:5001/api/v1';

const callApi = (method, path, actionTypes = [], data = null, options = null) => {
  axios({
    method,
    url: API_ROOT + path,
    data,
    options,
  })
  .then((response) => callActions(actionTypes, response.data))
  .catch((error) => console.log('error = ', error));
};

export const API = {
  spottings: {
    get() {
      return callApi('GET', '/spottings', [spottingsActions.SET_SPOTTINGS, filtersActions.ADD_FILTER]);
    },
    delete() {
      return callApi('DELETE', '/spottings', [spottingsActions.DEL_SPOTTINGS]);
    },
    post(data) {
      return callApi('POST', '/spottings', [spottingsActions.ADD_SPOTTING], data);
    }
  },
};