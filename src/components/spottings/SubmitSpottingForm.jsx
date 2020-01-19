import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Fuse from 'fuse.js';
import { createUseStyles } from 'react-jss';

import { GLOBAL_SPACING, styles } from '../../styles/common';

import DateTimePicker from '../common/DateTimePicker';
import TextBox from '../common/TextBox';
import CheckBox from '../common/CheckBox';
import { API } from '../../actions/index.js';
import { toggleForm } from '../../actions/spottings';
import { getUniqueBirdTypes } from '../../actions/filter';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: GLOBAL_SPACING * 4,
    paddingTop: '10%',
    zIndex: 1,
  },
  button: styles.button,
});

const SubmitSpottingForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [dateAndTime, setDateAndTime] = useState(new Date());
  const [location, setLocation] = useState();
  const [birdType, setBirdType] = useState();
  const [name, setName] = useState();
  const [birdSearch, setBirdSearch] = useState();
  const [confident, setConfident] = useState(false);
  const [help, setHelpNeeded] = useState(false);
  const spottings = useSelector(state => state.spottingsReducer.spottings);

  const validate = () => (dateAndTime && location && birdType && name);

  const onSubmit = () => {
    if (validate()) {
      help && setHelpNeeded(false);
      API.spottings.post({
          date_time: dateAndTime,
          bird_type: birdType,
          name,
          location,
          confident,
      });
      dispatch(toggleForm(false));
    } else {
      setHelpNeeded(true);
    }
  };

  const fuseOptions = {
    keys: ['bird_type'],
    id: 'bird_type',
  };

  const uniqueBirdTypes = getUniqueBirdTypes(spottings).map((birdType) => ({ bird_type: birdType }) );
  const fuse = new Fuse(uniqueBirdTypes, fuseOptions); 
  const filterList = (userInput) => setBirdSearch(fuse.search(userInput));

  return (
    <div className={classes.container}>
        <> Report a SPOTTING! </>
        <DateTimePicker 
          label={'Time of sighting'} 
          onChange={setDateAndTime}
          help={help}
          value={dateAndTime}
        />
        <TextBox 
          label={'Location'}
          onChange={setLocation}
          value={location}
          help={help}
        />
        <TextBox 
          label={'Bird Type'} 
          onChange={(input) => {
                setBirdType(input);
                filterList(input);
            }
          }
          value={birdType}
          search={birdSearch}
          help={help}
        />
        <TextBox
          label={'Your name'}
          onChange={setName}
          value={name}
          help={help}
        />
        <CheckBox 
          label={'Confident in your sighting?'}
          value={confident} 
          onChange={setConfident}
        />
        <button onClick={onSubmit} className={classes.button}>
          SPOT
        </button>
    </div>
  );
};

export default SubmitSpottingForm;