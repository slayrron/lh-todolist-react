import { useState } from 'react'
import Transfer from './Transfer'

function Ongoings({todos, updateTodos, 
    ongoings, updateOngoings, 
    wantToModify, setWantToModify,
    idToTransfer, setIdToTransfer}) {

    function prepareTransfer(idTargeted) {
        setWantToModify(true)
        setIdToTransfer(idTargeted)
    }

    return (
        <div className='ongoing'>
            <h2>Ongoing</h2>
            <ul>
                {ongoings.map((ongoing, index) => (
                    <div className="todoline" key={`${ongoing}-${index}`}>
                        <span onClick={() => prepareTransfer(ongoing.id)} className="todotask">{ongoing.name}</span>
                        {wantToModify && ongoing.id === idToTransfer ? (
                            <Transfer
                                task={ongoing}
                                setWantToModify={setWantToModify}
                                todos={todos}
                                updateTodos={updateTodos}
                                ongoings={ongoings}
                                updateOngoings={updateOngoings}
                            />
                        ) : null}
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Ongoings