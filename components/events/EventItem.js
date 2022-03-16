import Button from '../UI/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import RightArrowIcon from '../icons/arrow-right-icon';
import classes from './styles/event-item.module.css';

function EventItem({ event }) {
  const { id, title, description, location, date, image } = event;

  const eventLink = `/events/${id}`;
  const formattedAddress = location.replace(', ', '\n');
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
        <div>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={eventLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <RightArrowIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
