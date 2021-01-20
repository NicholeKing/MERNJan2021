import './App.css';
import Main from './views/Main';
import { Router } from '@reach/router';
import AddSong from './views/AddSong';
import UpdateSong from './views/UpdateSong';

function App() {
  return (
    <div className="App">
      <h1>Look at this list of songs!</h1>
      <Router>
        <Main path="/"/>
        <AddSong path="/song/add"/>
        <UpdateSong path="/song/update/:_id"/>
      </Router>
    </div>
  );
}

export default App;
