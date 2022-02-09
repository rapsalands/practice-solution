import './App.css';
import ArrayAsTable from './solutions/arrayAsTable';
import FileTree from './solutions/fileTree';
import MultiImageCarousal from './solutions/multiImageCarousal';
import RatingApp from './solutions/ratingApp';
import SingleImageCarousal from './solutions/singleImageCarousal';
import Stack from './solutions/stack';

function App() {
  return (
    <div className="App">
      <ArrayAsTable source={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
      <hr />
      <Stack />
      <hr />
      <FileTree />
      <hr />
      <RatingApp />
      <hr />
      <SingleImageCarousal sources={["A", "B", "C", "D"]} />
      <hr />
      <MultiImageCarousal timeLag={2000} sources={["A", "B", "C", "D"]} />
    </div>
  );
}

export default App;
