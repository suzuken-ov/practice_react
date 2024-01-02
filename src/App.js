import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import TimeLine from './components/timeline/Timeline';

function App() {
  return (
    <div className='app'>
      <Sidebar/>
      <TimeLine/>
    </div>
  );
}

export default App;