import { useState } from 'react'
import Update from './Update'

let nextId = 1

function Todos({todos, updateTodos, 
    ongoings, updateOngoings,
    finished, updateFinished,
    wantToModify, setWantToModify,
    idToTransfer, setIdToTransfer}) {

    const [todo, updateTodo] = useState("")
    const [isNewTodoTabOpen, setIsNewTodoTabOpen] = useState(false)

    function addToTodos() {
        updateTodos([...todos, {id: nextId, category: 'todo', name: todo}])
        nextId += 1
        updateTodo("")
        setIsNewTodoTabOpen(false)
    }

    function prepareTransfer(idTargeted) {
        setWantToModify(true)
        setIdToTransfer(idTargeted)
    }

    return (
        <div className='titlelist'>
            <h2>Todos <button onClick={() => setIsNewTodoTabOpen(true)}>+</button></h2>
            
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
                {todos.map((task, index) => (
                <div className="todoline" key={`${todo}-${index}`}>
                    <span onClick={() => prepareTransfer(task.id)} className="todotask">{task.name}</span>
                    {wantToModify && task.id === idToTransfer ? (
                        <Update
                            task={task}
                            setWantToModify={setWantToModify}
                            todos={todos}
                            updateTodos={updateTodos}
                            ongoings={ongoings}
                            updateOngoings={updateOngoings}
                            finished={finished}
                            updateFinished={updateFinished}
                        />
                ) : null}
                </div>
                ))}
            </ul>
      </div>
    )
}

export default Todos