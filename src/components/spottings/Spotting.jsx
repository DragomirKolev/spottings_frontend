import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import arrowUpSrc from '../../img/arrow_up.svg';
import arrowDownSrc from '../../img/arrow_down.svg';

import { GLOBAL_SPACING, styles } from '../../styles/common';

const useStyles = createUseStyles({
  row: {
    paddingBottom: GLOBAL_SPACING,
    borderBottom: styles.border('green'),
    cursor: 'pointer',
    display: 'flex',
  },
  rowContent: {
    marginLeft: GLOBAL_SPACING * 2,
  },
  rowItem: {
    display: 'flex',
    flexDirection: 'row'
  }
});

const getUserFacingTimestamp = (date) => {
  return `${date.getDate()}/${1 + date.getMonth()}/${date.getFullYear()} 
  ${date.getHours()}:${date.getMinutes()}`
}

const Spotting = ({ spotting }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const src = open ? arrowUpSrc : arrowDownSrc;
  const userFacingDate = getUserFacingTimestamp(new Date(spotting.date_time));

  return (
    <div onClick={() => setOpen(!open)} className={classes.row}>
      <img className={classes.arrow} src={src} alt="logo" width='24px' height='24px' />
      <div className={classes.rowContent}>
        <div className={classes.rowItem}> Date and Time : {userFacingDate}</div> 
        <div className={classes.rowItem}> Bird Type : {spotting.bird_type}</div> 
        <div className={classes.rowItem}> Confident : {spotting.confident ? 'Yes' : 'No'}</div>
          {open && <>
              <div className={classes.rowItem}> Name : {spotting.name}</div>
              <div className={classes.rowItem}> Place : {spotting.location} </div>
          </>}
      </div>
    </div>
  );
};

export default Spotting;