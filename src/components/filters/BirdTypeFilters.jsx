import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';

import { styles } from '../../styles/common';

import { updateFilter, filterType, setBirdTypeFilters, getFilterByType } from '../../actions/filter';
const birdFilterType = filterType.BIRD_TYPE;

const useStyles = createUseStyles({
  container: styles.filterContainer,
  filter: styles.filter,
  activeFilter: styles.activeFilter,
});

const BirdTypeFilters = () => {
  useSelector(state => state.filtersReducer.filters);

  const classes = useStyles();
  const [toggleAll, setToggleAll] = useState(true);

  const submitSpottingFormVisible = useSelector(state => state.spottingsReducer.submitSpottingFormVisible);
  const spottings = useSelector(state => state.spottingsReducer.spottings);

  const onFilterClick = (filter) => updateFilter(filter, birdFilterType);
  const uniqueBirdTypes = [...new Set(spottings.map(spotting => spotting.bird_type))];

  useEffect(() => {
    spottings && setBirdTypeFilters(true);
  }, 
  [spottings]);

  if (submitSpottingFormVisible) return null;

  const filtersList = uniqueBirdTypes.map((birdType, idx) => {
    const filter = getFilterByType(birdFilterType);
    const isActiveFilter = filter.data.includes(birdType);

    return (
      <div
        key={idx}
        className={isActiveFilter ? classes.activeFilter : classes.filter} 
        onClick={() => onFilterClick(birdType)}
        >
          {birdType}
      </div>
    )
  })

  const toggleBirdTypeFilters = (toggle) => {
    setToggleAll(toggle);
    setBirdTypeFilters(toggle);
  }

  return (
    <div className={classes.container}>
        <div 
          onClick={() => toggleBirdTypeFilters(!toggleAll)}
          className={toggleAll ? classes.filter : classes.activeFilter }
        >
          {toggleAll ? 'Deselect all birds' : 'Select all birds'}
        </div>
        {filtersList}
    </div>
  );
};

export default BirdTypeFilters;