import { actions, filtersInitialArray } from '../actions/filter.js';

const INITIAL_STATE = {
    filters: filtersInitialArray,
};
  
const filtersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.ADD_FILTER: 
            return {
                ...state,
                filters: state.filters.map((filter) => {  
                    if (filter.type === action.filterType) {
                        return { type: filter.type, data: [...filter.data, action.filter]}
                    }
                    return filter;
                }),
            };
        
        case actions.REMOVE_FILTER: 
            return {
                ...state,
                filters: state.filters.map((filter) => 
                {  
                    if (filter.type === action.filterType) {
                        return {type: filter.type, data: filter.data.filter(f => f !== action.filter)}
                    } 
                    return filter;
                }),
            };
        
        default:
            return state;
    }
};

export default filtersReducer;
