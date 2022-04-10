import './App.css';
import ArrayAsTable from './reactSolutions/arrayAsTable';
import FileTree from './reactSolutions/fileTree';
import MultiImageCarousal from './reactSolutions/multiImageCarousal';
import NestedCheckbox from './reactSolutions/nestedCheckbox';
import NestedCheckbox1 from './reactSolutions/nestedCheckbox_JavaScript';
import RatingApp from './reactSolutions/ratingApp';
import SingleImageCarousal from './reactSolutions/singleImageCarousal';
import Stack from './reactSolutions/stack';

function App() {
  return (
    <div className="App">
      <NestedCheckbox />
      <hr />
      <NestedCheckbox1 />
      <hr />
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
