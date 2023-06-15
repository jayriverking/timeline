import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';



function App() {
  console.log('The value of timelineData is', timelineData);
  console.log(Timeline);
  console.log('We should use timelineData in our project somehow...');
  const title = <h2 className='App-title'>{timelineData.person}'s Social Media Feed</h2>
  return (<div>
        <header className='App-header'>
        {title}
        </header>
        
        <Timeline />
  </div>);
}

export default App;