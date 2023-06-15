import './TimelineEvent.css';
import TimeStamp from './TimeStamp';

const TimelineEvent = ({ person, status, time }) => {
    return(
    <div>
        <h5>{person}</h5>
        <p>{status}</p>
        <TimeStamp time={time}></TimeStamp>
    </div>);
};

export default TimelineEvent;