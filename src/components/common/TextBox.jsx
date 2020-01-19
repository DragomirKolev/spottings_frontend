import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import { GLOBAL_SPACING, styles } from '../../styles/common';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    borderBottom: styles.border('green'),
    paddingBottom: GLOBAL_SPACING * 2,
    marginTop: GLOBAL_SPACING,
    marginBottom: GLOBAL_SPACING,
  },
  inputContainer: {
    width: '100%',
    marginRight: GLOBAL_SPACING * 4,
  },
  label: { marginRight: GLOBAL_SPACING * 2, width: '25%' },
  box: styles.textBox,
  greenBox: { border: styles.border('green'), ...styles.textBox },
  redBox: { border: styles.border('red'), ...styles.textBox },
  dropdown: {
    display: 'block',
    height: ({ search }) => search && Math.min(search.length * 20, 60),
    overflow: 'auto',
    backgroundColor: 'white',
  },
  searchLabel: {
    display: 'block',
    borderBottom: styles.border('green'),
    cursor: 'pointer'
  },
  helpLabel: {
    color: 'red',
  }
});

const TextBox = ({ label, value, help, onChange, search = null }) => {
  const classes = useStyles({ search });
  const [searchOpen, setSearchOpen] = useState(false);

  const className = help && !value ? classes.redBox 
    : value ? classes.greenBox : classes.box;

  const searchMap = search && search.map((label, idx) =>
    <div key={idx} onClick={() => {
      onChange(label);
      setSearchOpen(false)
    }} 
    className={classes.searchLabel}>{label}</div>
  );

  return (
    <div className={classes.container}>
      <div className={classes.label}>{label} :</div>
      <div className={classes.inputContainer}>
        <input
          className={className}
          type='text'
          placeholder='Type here...'
          value={value || ''}
          onFocus={() => setSearchOpen(true)}
          onChange={(evt) => onChange(evt.currentTarget.value)} 
        />
       {className === classes.redBox && <div className={classes.helpLabel}>Please fill in this field.</div>}
       {searchOpen && search && <div className={classes.dropdown}>{searchMap}</div>}
      </div>
    </div>
  );
}

export default TextBox;