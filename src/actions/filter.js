import store from '../store.js';

export const confidenceMap = [
    {type: 'CONFIDENT', label: 'Confident'},
    {type: 'NOT_CONFIDENT', label: 'Not Confident'},
];

export const filterType = {
    CONFIDENT: 'CONFIDENT',
    BIRD_TYPE: 'BIRD_TYPE'
};

export const filtersInitialArray = [
    { type: filterType.CONFIDENT, data: [ confidenceMap[0].type ] },
    { type: filterType.BIRD_TYPE, data: [] }
];

export const actions = {
    ADD_FILTER: 'ADD_FILTER',
    REMOVE_FILTER: 'REMOVE_FILTER',
};

export const getFilterByType = (filterType) => {
    const filters = store.getState().filtersReducer.filters;

    return filters.find(filter => filter.type === filterType);
};

export const getUniqueBirdTypes = (spottings) => { 
    return [...new Set(spottings.map(spotting => spotting.bird_type))];
};

export const setBirdTypeFilters = (add) => {
    const spottings = store.getState().spottingsReducer.spottings;
    const uniqueBirdTypes = getUniqueBirdTypes(spottings);

    uniqueBirdTypes.length > 0 && uniqueBirdTypes.forEach((birdType) => {
        const filter = getFilterByType(filterType.BIRD_TYPE);
        if (filter.type === filterType.BIRD_TYPE) {
            if (add){ 
                store.dispatch({
                    type: actions.ADD_FILTER,
                    filter: birdType,
                    filterType: filterType.BIRD_TYPE
                });
            } else {
                store.dispatch({
                    type: actions.REMOVE_FILTER,
                    filter: birdType,
                    filterType: filterType.BIRD_TYPE
                });
            }
        }
    })
}

export const updateFilter = (passedFilter, filterType) => {
    const filter = getFilterByType(filterType);

    if (filter.type === filterType) {
        if (filter.data.includes(passedFilter)) {
            store.dispatch({
                type: actions.REMOVE_FILTER,
                filter: passedFilter,
                filterType: filterType
            });
        } else {
            store.dispatch({
                type: actions.ADD_FILTER,
                filter: passedFilter,
                filterType: filterType
            });
        }
    };
}