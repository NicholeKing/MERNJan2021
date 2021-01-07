import './App.css';
import First from './components/First';
import Frame from './components/Frame';

function App() {
  return (
    <>
    <div className="App">
      <h1>Class Components!</h1>
      <Frame>
        <First number={7} letter={"A"}/>
        <First number={5} letter="B"></First>
        <First number={2} letter="C"></First>
        <First number={100} letter="D"></First>
        <First number={[1,2,3,4,5]} letter="E"></First>
        <First number={54} letter="F"></First>
      </Frame>
    </div>
    </>
  );
}

export default App;
