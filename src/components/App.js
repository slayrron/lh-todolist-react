import { useState } from 'react'
import Todos from './Todos'
import Ongoings from './Ongoings'
import '../styles/Todos.css'

function App() {
  const [todos, updateTodos] = useState([])
  const [ongoings, updateOngoings] = useState([])

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <Todos
            todos={todos} updateTodos={updateTodos} 
            ongoings={ongoings} updateOngoings={updateOngoings}
      />
      <Ongoings 
            ongoings={ongoings} updateOngoings={updateOngoings}
      />
      
    </div>
  );
}

export default App;
