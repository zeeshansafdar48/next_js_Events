import { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { getAllEvents } from '../../dummy-data';

function AllEvents() {
  const router = useRouter();
  const events = getAllEvents();

  const onFilterEvents = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={onFilterEvents} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEvents;
