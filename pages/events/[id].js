import { useRouter } from 'next/router';
import { Fragment } from 'react';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import EventContent from '../../components/event-detail/event-content';

import { getEventById } from '../../dummy-data';

function EventDetails() {
  const router = useRouter();
  const eventId = router.query.id;

  const event = getEventById(eventId);

  if (!event) {
    return <p>No Event Found....!</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetails;
