import './App.css';
import MultiImageCarousal from './solutions/multiImageCarousal';

function App() {
  return (
    <div className="App">
      <MultiImageCarousal timeLag={2000} sources={["A", "B", "C", "D"]} />
    </div>
  );
}

export default App;
