import { useState } from "react"


function Update({task, setWantToModify, 
    todos, updateTodos, 
    ongoings, updateOngoings,
    finished, updateFinished}) {

    const categories = ["todo", "ongoing", "finished"]
    const [selectedCategory, setSelectedCategory] = useState('')
    const [newTaskName, setNewTaskName] = useState(task.name)
    
    function updateTaskName(changingTask) {
        changingTask.name = newTaskName
    }

    function updateCategory(transferingTask) {

        if (selectedCategory === "") {
            return
        }

        if (selectedCategory === categories[0]) {
            updateTodos([...todos, {id: transferingTask.id, category: categories[0], name: transferingTask.name}])
            
            updateOngoings(ongoings.filter(item => item.id !== transferingTask.id))
            updateFinished(finished.filter(item => item.id !== transferingTask.id))
            
        }
        else if (selectedCategory === categories[1]) {
            updateOngoings([...ongoings, {id: transferingTask.id, category: categories[1], name: transferingTask.name}])
            
            updateTodos(todos.filter(item => item.id !== transferingTask.id))
            updateFinished(finished.filter(item => item.id !== transferingTask.id))
        }
        else if (selectedCategory === categories[2]) {
            updateFinished([...finished, {id: transferingTask.id, category: categories[2], name: transferingTask.name}])
            
            updateTodos(todos.filter(item => item.id !== transferingTask.id))
            updateOngoings(ongoings.filter(item => item.id !== transferingTask.id))
        }
    }

    function deleteTask(task) {
        if (task.category === categories[0]) {
            updateTodos(todos.filter(item => item.id !== task.id))
        }
        else if (task.category === categories[1]) {
            updateOngoings(ongoings.filter(item => item.id !== task.id))
        }
        else if (task.category === categories[2]) {
            updateFinished(finished.filter(item => item.id !== task.id))
        }
    }

    function applyModifications(updatedTask) {
        updateTaskName(updatedTask)
        updateCategory(updatedTask)
        setWantToModify(false)
    }

    return (
        <div>
            <h3>
                titre : <input 
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}    
                />
            </h3>
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="">---</option>
                {categories.map(category => (
                    task.category !== category && 
                        <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <button onClick={() => applyModifications(task)}>Valider</button>
            <button onClick={() => setWantToModify(false)}>Annuler</button>
            <button onClick={() => deleteTask(task)}>Supprimer</button>
        </div>
    )
}

export default Update