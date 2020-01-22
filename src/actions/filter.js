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

export const getUniqueBirdTypes = (spottings) => 
    [...new Set(spottings.map(spotting => spotting.bird_type))];

export const setBirdTypeFilters = (add) => {
    const spottings = store.getState().spottingsReducer.spottings;
    const uniqueBirdTypes = getUniqueBirdTypes(spottings);

    uniqueBirdTypes.length > 0 && uniqueBirdTypes.forEach((birdType) => {
        const filter = getFilterByType(filterType.BIRD_TYPE);
        if (filter.type === filterType.BIRD_TYPE) {
            store.dispatch({
                type: add ? actions.ADD_FILTER : actions.REMOVE_FILTER,
                filter: birdType,
                filterType: filterType.BIRD_TYPE
            });
        }
    })
}

export const updateFilter = (filterValue, filterType) => {
    const filter = getFilterByType(filterType);

    store.dispatch({
        type: filter.data.includes(filterValue) ? actions.REMOVE_FILTER : actions.ADD_FILTER,
        filter: filterValue,
        filterType: filterType
    });
};
