import data from './data/index.js';
import NavBar from "./components/navbar.js"
import List from './components/list.js'
import { useState } from 'react';

function App() {

  const [people,setPeople] = useState(data);
  const [isClear,setIsClear] = useState(false);

  const clearHandler = () => {
    setPeople([]);
    setIsClear(true);
  }
  
  const resetHandler = () => {
    setPeople(data);
     setIsClear(false);
  }



  
  return (
    <>
    <NavBar/>
     <main>
    <section className='App container'>
      <h3>{people.length ? "Birthdays Today" : "No Birthday Today"} </h3>
      <List people={people}/>
      <button type='button' onClick={clearHandler} className='container_btn'> Clear All</button>
      <button type='button' onClick={resetHandler} className='container_btn'> Reset</button>
        { isClear === true ? <h4 className='note'><strong>Note:</strong>Click the Reset to data the Data again</h4> : ''} 
    </section>
    </main>
    </>
  );
}

// DesignDaily
export default App;
