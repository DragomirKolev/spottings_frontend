import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';

import { toggleForm } from '../../actions/spottings';
import addPostSrc from '../../img/post_add.svg';
import closePostSrc from '../../img/close.svg';
import { GLOBAL_SPACING } from '../../styles/common';

const useStyles = createUseStyles({
  img: { cursor: 'pointer', width: 60, height: 60, marginTop: GLOBAL_SPACING * 2 },
});

const SubmitSpotting = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const submitSpottingFormVisible = useSelector(state => state.spottingsReducer.submitSpottingFormVisible);

  const onButtonPress = () => dispatch(toggleForm(!submitSpottingFormVisible));
  const src = submitSpottingFormVisible ? closePostSrc : addPostSrc;

  return (
      <img className={classes.img} onClick={onButtonPress} src={src} alt="logo" />
  );
};

export default SubmitSpotting;