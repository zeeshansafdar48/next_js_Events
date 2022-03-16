import { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventList from '../../components/events/EventList';
import ResultTitle from '../../components/results-title/results-title';
import ErrorAlert from '../../components/error-alert/error-alert';
import Button from '../../components/UI/button';
import { getFilteredEvents } from '../../dummy-data';

function FilterEvents() {
  const router = useRouter();

  const filterValues = router.query.slug;

  if (!filterValues) {
    return <p className="center">Loading...</p>;
  }

  const selectedYear = filterValues[0];
  const selectedMonth = filterValues[1];

  const numYear = +selectedYear;
  const numMonth = +selectedMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear < 2021 ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid Filter values, Please adjust your values</p>
        </ErrorAlert>
        <div className="center">
          <Button link={'/events'}>Events</Button>
        </div>
      </Fragment>
    );
  }

  const filterEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filterEvents || filterEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">No Events Found</p>
        </ErrorAlert>
        <div className="center">
          <Button link={'/events'}>Events</Button>
        </div>
      </Fragment>
    );
  }

  const dateValue = new Date(numYear, numMonth);
  return (
    <Fragment>
      <ResultTitle date={dateValue} />
      <EventList items={filterEvents} />
    </Fragment>
  );
}

export default FilterEvents;
