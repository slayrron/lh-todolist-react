import { useState } from 'react'
import Todos from './Todos'

function App() {
  
  const [todos, updateTodolist] = useState([])

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <Todos todos={todos} updateTodolist={updateTodolist}/>
      <ul>
          {todos.map(({todo}, index) => (
            <div key={`${todo}-${index}`}>
              {todo}
            </div>
          ))}
      </ul>
    </div>
  );
}

export default App;
