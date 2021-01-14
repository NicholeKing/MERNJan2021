import './App.css';
import "nes.css/css/nes.min.css";
import Types from './components/Types';
import Region from './components/Region';
import { Router, Link, navigate } from '@reach/router';
import Pokemon from './components/Pokemon';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  navigate('/types');
  return (
    <div className="App container-fluid">
      <div className="jumbotron"><h1><i className="nes-pokeball"></i> Pok&eacute;dex <i className="nes-pokeball"></i></h1>
      <Link to="/types">Types</Link><span> | </span>
      <Link to="/region">Region</Link><span> | </span>
      <Link to="/pokemon/1">Pokemon</Link>
      </div>
      <Router>
        <Types path="/types"/>
        <Region path="/region"/>
        <Pokemon path="/pokemon/:id"/>
      </Router>
    </div>
  );
}

export default App;
