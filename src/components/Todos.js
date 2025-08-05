import { useState } from 'react'

function Todos({todos, updateTodos, ongoings, updateOngoings}) {

    const [todo, updateTodo] = useState("")
    const [isNewTodoTabOpen, setIsNewTodoTabOpen] = useState(false)

    function addToTodos() {
        updateTodos([...todos, {todo}])
        updateTodo("")
        setIsNewTodoTabOpen(false)
    }

    return (
        <div className='todolist'>
            <h2>Todos</h2>
            <button onClick={() => setIsNewTodoTabOpen(true)}>+</button>
            { isNewTodoTabOpen ? (
                <div>
                    <input
                        placeholder="Entrez votre nouvelle tache"
                        value={todo} 
                        onChange={(e) => updateTodo(e.target.value)}
                    />
                    <button onClick={addToTodos}>Ajouter la tache</button>
                </div>

            ) : null
            }
            <ul>
                {todos.map(({todo}, index) => (
                <div className="todoline" key={`${todo}-${index}`}>
                    <span onClick={() => updateOngoings([...ongoings, {name: todo}])} className="todotask">{todo}</span>
                </div>
                ))}
            </ul>
      </div>
    )
}

export default Todos