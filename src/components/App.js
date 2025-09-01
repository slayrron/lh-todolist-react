import { useState } from 'react'
import Todos from './Todos'
import Ongoings from './Ongoings'
import Finished from './Finished'
import '../styles/Todos.css'

function App() {

  const [todos, updateTodos] = useState([])
  const [ongoings, updateOngoings] = useState([])
  const [finished, updateFinished] = useState([])
  const [wantToModify, setWantToModify] = useState(false)
  const [idToTransfer, setIdToTransfer] = useState("")

  function deleteAll() {
    updateTodos([])
    updateOngoings([])
    updateFinished([])
  }

  return (
    <div className="App">
      <div>
        <h1>TODO LIST</h1>
        <button onClick={deleteAll}>Tout supprimer</button>
      </div>
      <div className='grid'>
        <Todos
              todos={todos} updateTodos={updateTodos} 
              ongoings={ongoings} updateOngoings={updateOngoings}
              finished={finished} updateFinished={updateFinished}
              wantToModify={wantToModify} setWantToModify={setWantToModify}
              idToTransfer={idToTransfer} setIdToTransfer={setIdToTransfer}
              
        />
        <Ongoings
              todos={todos} updateTodos={updateTodos} 
              ongoings={ongoings} updateOngoings={updateOngoings}
              finished={finished} updateFinished={updateFinished}
              wantToModify={wantToModify} setWantToModify={setWantToModify}
              idToTransfer={idToTransfer} setIdToTransfer={setIdToTransfer}
        />
        <Finished
              todos={todos} updateTodos={updateTodos} 
              ongoings={ongoings} updateOngoings={updateOngoings}
              finished={finished} updateFinished={updateFinished}
              wantToModify={wantToModify} setWantToModify={setWantToModify}
              idToTransfer={idToTransfer} setIdToTransfer={setIdToTransfer}
        />
      </div>
    </div>
  );
}

export default App;
