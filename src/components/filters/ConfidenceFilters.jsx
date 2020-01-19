import React from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';

import { styles } from '../../styles/common';

import { updateFilter, confidenceMap, filterType, getFilterByType } from '../../actions/filter';
const confidenceFilterType = filterType.CONFIDENT;

const useStyles = createUseStyles({
  container: styles.filterContainer,
  filter: styles.filter,
  activeFilter: styles.activeFilter,
});

const ConfidenceFilters = () => {
  useSelector(state => state.filtersReducer.filters);
  const classes = useStyles();
  const submitSpottingFormVisible = useSelector(state => state.spottingsReducer.submitSpottingFormVisible);

  if (submitSpottingFormVisible) return null;

  const onFilterClick = (filter) => updateFilter(filter, confidenceFilterType);
  
  const filters = confidenceMap.map((confidenceFilter) => {
    const filter = getFilterByType(confidenceFilterType);
    const isActiveFilter = filter.data.includes(confidenceFilter.type);
  
    return (
      <div
        key={confidenceFilter.type}
        className={isActiveFilter ? classes.activeFilter : classes.filter} 
        onClick={() => onFilterClick(confidenceFilter.type)}
        >
          {confidenceFilter.label}
      </div>
    );
  });

  return (
    <div className={classes.container}>{filters}</div>
  );
};

export default ConfidenceFilters;