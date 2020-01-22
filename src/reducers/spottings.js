import { actions } from '../actions/spottings';

const INITIAL_STATE = {
  spottings: [],
  submitSpottingFormVisible: false,
};

const campaignsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.SET_SPOTTINGS: 
      return {
        ...state,
        spottings: action.data,
      };
    
    case actions.ADD_SPOTTING: 
      return {
        ...state,
        spottings: [ ...state.spottings, action.data ],
      };
    
    case actions.DEL_SPOTTINGS: 
      return {
        ...state,
        spottings: INITIAL_STATE.spottings,
      };
    
    case actions.TOGGLE_SUBMIT_SPOTTING_FORM:
      return {
        ...state,
        submitSpottingFormVisible: action.submitSpottingFormVisible,
      };
      
    default:
      return state;
  }
};

export default campaignsReducer;
