import './App.css';
import MultiImageCarousal from './solutions/multiImageCarousal';
import SingleImageCarousal from './solutions/singleImageCarousal';

function App() {
  return (
    <div className="App">
      {/* <MultiImageCarousal timeLag={2000} sources={["A", "B", "C", "D"]} /> */}
      <hr />
      <SingleImageCarousal sources={["A", "B", "C", "D"]} />
    </div>
  );
}

export default App;
