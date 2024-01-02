import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import TimeLine from './components/timeline/Timeline';
import Widgets from './components/widget/Widgets';

function App() {
  return (
    <div className='app'>
      <Sidebar/>
      <TimeLine/>
      <Widgets/>
    </div>
  );
}

export default App;