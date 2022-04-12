import './App.css';
import ArrayAsTable from './reactSolutions/arrayAsTable';
import FileTree from './reactSolutions/fileTree';
import MultiImageCarousal from './reactSolutions/multiImageCarousal';
import NestedCheckbox from './reactSolutions/nestedCheckbox';
import RatingApp from './reactSolutions/ratingApp';
import SingleImageCarousal from './reactSolutions/singleImageCarousal';
import Stack from './reactSolutions/stack';

function App() {
  return (
    <div className="App">
      <NestedCheckbox />
      <hr />
      <ArrayAsTable source={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
      <hr />
      <Stack />
      <hr />
      <FileTree />
      <hr />
      <RatingApp />
      <br />
      <RatingApp seedRating={8} maxRating={10} />
      <hr />
      <SingleImageCarousal sources={["A", "B", "C", "D"]} />
      <hr />
      <MultiImageCarousal timeLag={2000} sources={Array(10).fill(null).map((_, index) => `${index}`)} />
    </div>
  );
}

export default App;
