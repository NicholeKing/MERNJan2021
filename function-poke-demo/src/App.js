import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Charmander from './images/charmander.jpg';
import Bulbasaur from './images/bulbasaur.jpg';
import Bidoof from './images/bidoofcard.jpg';

function App() {
  return (
    <div className="App">
      <h1>Enter the arena</h1>
      <Card image={Charmander} hp={50}></Card>
      <Card image={Bulbasaur} hp={40}></Card>
      <Card image={Bidoof} hp={60}></Card>
    </div>
  );
}

export default App;
