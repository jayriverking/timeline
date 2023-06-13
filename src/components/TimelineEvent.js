import './TimelineEvent.css';
import TimeStamp from './TimeStamp';

const TimelineEvent = ({ person, status, timestamp }) => {
    return(
    <div>
        <h5>{person}</h5>
        <p>{status}</p>
        <p>{timestamp}</p>
    </div>);
};

export default TimelineEvent;