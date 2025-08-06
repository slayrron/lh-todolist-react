import { useState } from 'react'
import Todos from './Todos'
import Ongoings from './Ongoings'
import '../styles/Todos.css'

function App() {

  const [todos, updateTodos] = useState([])
  const [ongoings, updateOngoings] = useState([])
  const [wantToModify, setWantToModify] = useState(false)
  const [idToTransfer, setIdToTransfer] = useState("")

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <Todos
            todos={todos} updateTodos={updateTodos} 
            ongoings={ongoings} updateOngoings={updateOngoings}
            wantToModify={wantToModify} setWantToModify={setWantToModify}
            idToTransfer={idToTransfer} setIdToTransfer={setIdToTransfer}
            
      />
      <Ongoings
            todos={todos} updateTodos={updateTodos} 
            ongoings={ongoings} updateOngoings={updateOngoings}
            wantToModify={wantToModify} setWantToModify={setWantToModify}
            idToTransfer={idToTransfer} setIdToTransfer={setIdToTransfer}
      />
      
    </div>
  );
}

export default App;
