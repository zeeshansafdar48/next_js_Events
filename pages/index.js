import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList';

function FeatureEvents() {
  const featureEvents = getFeaturedEvents();

  return <EventList items={featureEvents} />;
}

export default FeatureEvents;
