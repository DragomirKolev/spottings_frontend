import React from 'react';
import { createUseStyles } from 'react-jss';

import { GLOBAL_SPACING } from '../../styles/common';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: GLOBAL_SPACING,
    marginBottom: GLOBAL_SPACING
  },
  label: { marginRight: GLOBAL_SPACING * 2 },
});

const CheckBox = ({ label, value, onChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.label}>{label} : </div>
        <input
          type="checkbox" 
          cheked={value.toString()} 
          onChange={() => onChange(!value)}
        />
    </div>
  );
}

export default CheckBox;