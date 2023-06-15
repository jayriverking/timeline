import './Timeline.css';
// import timelineData from '..data/timeline.json';
import TimelineEvent from './TimelineEvent';
import TimelineData from '../data/timeline.json'
import TimeStamp from './TimeStamp';


const Timeline = () => {
    const dataArray = TimelineData.events;
    console.log(dataArray);
    const timeComponents = dataArray.map(event => {
        // const timeStamp = <TimeStamp time={event.timestamp} />
        return <section>
            
            <TimelineEvent
                person={event.person}
                status={event.status}
                time={event.timestamp}>
            </TimelineEvent>

            </section>
    });

    return(
        <div className='timeline'>
            <h1>Time components!</h1>
            {timeComponents}
        </div>
    );
};

export default Timeline;