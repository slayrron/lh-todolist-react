import { useState } from "react";
import Update from './Update'

function Finished({todos, updateTodos, 
    ongoings, updateOngoings,
    finished, updateFinished,
    wantToModify, setWantToModify,
    idToTransfer, setIdToTransfer}) {

    function prepareTransfer(idTargeted) {
        setWantToModify(true)
        setIdToTransfer(idTargeted)
    }

    return (
        <div>
            <h2 className='titlelist'>Terminées</h2>
            <ul>
                {finished.map((f, index) => (
                    <div className="todoline" key={`${f}-${index}`}>
                        <span onClick={() => prepareTransfer(f.id)} className="todotask finished">{f.name}</span>
                        {wantToModify && f.id === idToTransfer ? (
                            <Update
                                task={f}
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

export default Finished