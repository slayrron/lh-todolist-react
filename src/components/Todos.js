

function Todos({todos, updateTodolist}) {

    function addToTodos(todo) {
        updateTodolist([...todos, {todo}])
    }

    return (
        <div>
            <button onClick={() => addToTodos("todo")}>+</button>
        </div>
    )
}

export default Todos