import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';

import { GLOBAL_SPACING } from '../../styles/common';

import { API } from '../../actions/index.js';
import { confidenceMap, filterType } from '../../actions/filter';
import Spotting from './Spotting';

const useStyles = createUseStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: '80%',
    justifyContent: 'center',
    gridGap: GLOBAL_SPACING * 2,
  }
});

const shouldShowSpotting = (filters, spotting) => {
  const shouldShow = filters.map((filter) => {
    if (filter.type === filterType.CONFIDENT) {
      return (filter.data.includes(confidenceMap[0].type) && spotting.confident)
        || (filter.data.includes(confidenceMap[1].type) && !spotting.confident);
    } 
    if (filter.type === filterType.BIRD_TYPE) {
      return filter.data.includes(spotting.bird_type);
    }
    return false;
  });

  return shouldShow.includes(true);
}

const SpottingsList = () => {
  const classes = useStyles();

  const spottings = useSelector(state => state.spottingsReducer.spottings);
  const filters = useSelector(state => state.filtersReducer.filters);
  const submitSpottingFormVisible = useSelector(state => state.spottingsReducer.submitSpottingFormVisible);

  useEffect(() => {
    API.spottings.get();
  }, []);

  if (submitSpottingFormVisible) return null;

  const spottingsList = spottings.length > 0 && spottings.map((spotting) => {
    const shouldShow = shouldShowSpotting(filters, spotting);

    return (shouldShow && <Spotting key={spotting._id} spotting={spotting} />);
  });

  return (
    <div className={classes.container} data-cy="spottingsContainer">
        {spottingsList}
    </div>
  );
};

export default SpottingsList;