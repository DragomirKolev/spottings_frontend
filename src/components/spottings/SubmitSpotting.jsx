import React from 'react';
import { useSelector } from 'react-redux';

import SubmitSpottingForm from './SubmitSpottingForm';

const SubmitSpotting = () => {
  const submitSpottingFormVisible = useSelector(state => state.spottingsReducer.submitSpottingFormVisible);

  if (!submitSpottingFormVisible) return null;

  return <SubmitSpottingForm />;
};

export default SubmitSpotting;

