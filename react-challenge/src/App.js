
import './App.css';
import Github from './components/Github';
import Repositories from './components/Repositories';


function App() {
  return (
    <div className="App">
      <div>
        <Github/>
      </div>
      <div>
        <Repositories/>
      </div>
      
    </div>
  );
}

export default App;
