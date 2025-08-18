import { useState } from "react"
import "../styles/Update.css"


function Update({task, setWantToModify, 
    todos, updateTodos, 
    ongoings, updateOngoings,
    finished, updateFinished}) {

    const categories = ["todo", "ongoing", "finished"]
    const [selectedCategory, setSelectedCategory] = useState('')
    const [newTaskName, setNewTaskName] = useState(task.name)
    const [newTaskDescription, setNewTaskDescription] = useState(task.description)
    
    function updateTaskNameAndDescription(changingTask) {
        changingTask.name = newTaskName
        changingTask.description = newTaskDescription
    }

    function updateCategory(transferingTask) {

        if (transferingTask.category === selectedCategory) {
            return
        }

        if (selectedCategory === categories[0]) {
            updateTodos([...todos, {id: transferingTask.id, name: transferingTask.name, category: categories[0], description: transferingTask.description}])
            
            updateOngoings(ongoings.filter(item => item.id !== transferingTask.id))
            updateFinished(finished.filter(item => item.id !== transferingTask.id))
            
        }
        else if (selectedCategory === categories[1]) {
            updateOngoings([...ongoings, {id: transferingTask.id, name: transferingTask.name, category: categories[1], description: transferingTask.description}])
            
            updateTodos(todos.filter(item => item.id !== transferingTask.id))
            updateFinished(finished.filter(item => item.id !== transferingTask.id))
        }
        else if (selectedCategory === categories[2]) {
            updateFinished([...finished, {id: transferingTask.id, name: transferingTask.name, category: categories[2], description: transferingTask.description}])
            
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
        updateTaskNameAndDescription(updatedTask)
        updateCategory(updatedTask)
        setWantToModify(false)
    }

    return (
        <div>
            <div className="overlay" onClick={() => setWantToModify(false)}></div>
            <div className="updatePopup">
                <div className="updateEntree">
                    <input className="titleTask" 
                        value={newTaskName}
                        onChange={(e) => setNewTaskName(e.target.value)}    
                    />
                </div>
                <div className="updateEntree">
                    Catégorie :  
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value={task.category}>{task.category}</option>
                        {categories.map(category => (
                            task.category !== category && 
                                <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                <div className="updateEntree">
                    <textarea
                        placeholder="Petite description ?"
                        value={newTaskDescription}
                        onChange={(e) => setNewTaskDescription(e.target.value)}
                        rows={6}
                        cols={30}
                    />
                </div>
                
                <button onClick={() => deleteTask(task)}>Supprimer</button>
                <button onClick={() => setWantToModify(false)}>Annuler</button>
                <button onClick={() => applyModifications(task)}>Valider</button>
                
            </div>
        </div>
    )
}

export default Update