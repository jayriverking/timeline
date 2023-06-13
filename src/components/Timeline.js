import './Timeline.css';
// import timelineData from '..data/timeline.json';
import TimelineEvent from './TimelineEvent';
import TimelineData from '../data/timeline.json'


const Timeline = () => {
    const dataArray = TimelineData.events;
    const timeComponents = dataArray.map(event => {
        return <section><TimelineEvent person={event.person} status={event.status} timestamp={event.timestamp} /></section>
    });
    return(
        <div>
            <h1>Time components!</h1>
            {timeComponents}
        </div>
    );
};

export default Timeline;