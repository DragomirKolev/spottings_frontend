import { actions, filtersInitialArray } from '../actions/filter.js';

const INITIAL_STATE = {
    filters: filtersInitialArray,
};
  
const filtersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.ADD_FILTER: {
            const newState = state.filters.map((filter) => 
            {  
                if (filter.type === action.filterType) {
                    return filter.data.length ? 
                        { type: filter.type, data: [...filter.data, action.filter]}
                        : { type: filter.type, data: [action.filter]};
                } 
                return filter;
            });

            return {
                ...state,
                filters: newState,
            };
        }
        case actions.REMOVE_FILTER: {
            const newState = state.filters.map((filter) => 
            {  
                if (filter.type === action.filterType) {
                    return {type: filter.type, data: filter.data.filter(f => f !== action.filter)}
                } 
                return filter;
            });

            return {
                ...state,
                filters: newState,
            };
        }
        default:
            return state;
    }
};

export default filtersReducer;
