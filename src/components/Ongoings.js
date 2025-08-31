import { useState } from 'react'
import Update from './Update'

function Ongoings({todos, updateTodos, 
    ongoings, updateOngoings,
    finished, updateFinished,
    wantToModify, setWantToModify,
    idToTransfer, setIdToTransfer}) {

    function prepareTransfer(idTargeted) {
        setWantToModify(true)
        setIdToTransfer(idTargeted)
    }

    return (
        <div className='ongoing-list'>
            <h2 className='titlelist'>En Cours</h2>
            <ul>
                {ongoings.map((ongoing, index) => (
                    <div className="todoline" key={`${ongoing}-${index}`}>
                        <span onClick={() => prepareTransfer(ongoing.id)} className="todotask ongoing">{ongoing.name}</span>
                        {wantToModify && ongoing.id === idToTransfer ? (
                            <Update
                                task={ongoing}
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

export default Ongoings