import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { createUseStyles } from 'react-jss';

import { GLOBAL_SPACING, styles } from '../../styles/common';

const useStyles = createUseStyles({
  container: {
    marginTop: GLOBAL_SPACING,
    paddingBottom: GLOBAL_SPACING,
    borderBottom: styles.border('green'),
  },
  picker: { width: '100%' }
});

const CustomDateTimePicker = ({ value, onChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <DateTimePicker
        className={classes.picker}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default CustomDateTimePicker;