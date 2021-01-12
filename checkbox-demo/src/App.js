import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import Results from './components/Results';
import { useState } from 'react';

function App() {
  const [superList, setSuperList] = useState([]);
  const addSuper = newEntry => {
    setSuperList([...superList, newEntry])
  }
  const charDeath = key => {
    let character = superList[key];
    character.isDead = !character.isDead;
    setSuperList([...superList.slice(0,key), character, ...superList.slice(key+1)])
    console.log(character)
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
          <Form newSuper={addSuper}/>
        </div>
        <div className="col-sm-6">
          <Results allSupers={superList} died={charDeath}/>
        </div>
      </div>
    </div>
  );
}

export default App;
