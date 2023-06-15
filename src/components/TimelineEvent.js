import './TimelineEvent.css';
import TimeStamp from './TimeStamp';

const TimelineEvent = ({ person, status, time }) => {
    return(
    <div className='timeline-event'>
        <h5 className='event-person'>{person}</h5>
        <p className='event-status'>{status}</p>
        <TimeStamp time={time} className='event-time'></TimeStamp>
    </div>);
};

export default TimelineEvent;