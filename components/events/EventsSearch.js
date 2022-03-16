import React, { useRef } from 'react';

import classes from '../../styles/event-search.module.css';
import Button from '../UI/button';

function EventsSearch(props) {
  const yearRef = useRef();
  const monthRef = useRef();

  const onFilterEvents = (e) => {
    e.preventDefault();

    const selectedYear = yearRef.current.value;
    const selectedMonth = monthRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className={classes.form} onSubmit={onFilterEvents}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearRef}>
            <option value={'2021'}>2021</option>
            <option value={'2022'}>2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthRef}>
            <option value={'01'}>January</option>
            <option value={'02'}>February</option>
            <option value={'03'}>March</option>
            <option value={'04'}>April</option>
            <option value={'05'}>May</option>
            <option value={'06'}>June</option>
            <option value={'07'}>July</option>
            <option value={'08'}>August</option>
            <option value={'09'}>September</option>
            <option value={'10'}>October</option>
            <option value={'11'}>November</option>
            <option value={'12'}>December</option>
          </select>
        </div>
      </div>
      <Button>Filter Events</Button>
    </form>
  );
}

export default EventsSearch;
