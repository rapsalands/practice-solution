import './App.css';
import FileTree from './solutions/fileTree';
import MultiImageCarousal from './solutions/multiImageCarousal';
import RatingApp from './solutions/ratingApp';
import SingleImageCarousal from './solutions/singleImageCarousal';

function App() {
  return (
    <div className="App">
      <FileTree />
      <br />
      {/* <RatingApp /> */}
      <hr />
      {/* <SingleImageCarousal sources={["A", "B", "C", "D"]} /> */}
      <hr />
      {/* <MultiImageCarousal timeLag={2000} sources={["A", "B", "C", "D"]} /> */}
    </div>
  );
}

export default App;
