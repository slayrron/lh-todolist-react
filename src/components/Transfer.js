import { useState } from "react"


function Transfer({task, setWantToModify, 
    todos, updateTodos, 
    ongoings, updateOngoings,
    finished, updateFinished}) {

    const categories = ["todo", "ongoing", "finished"]
    const [selectedCategory, setSelectedCategory] = useState('')
    

    function transferToCategory(transferingTask, selectedCategory) {
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
        setWantToModify(false)
    }

    return (
        <div>
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}>
                <option>---</option>
                {categories.map(category => (
                    task.category !== category && 
                        <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <button onClick={() => transferToCategory(task, selectedCategory)}>Valider</button>
            <button onClick={() => setWantToModify(false)}>Annuler</button>
        </div>
    )
}

export default Transfer