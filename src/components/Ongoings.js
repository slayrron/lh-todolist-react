import { useState } from 'react'

function Ongoings({ongoings, updateOngoings}) {
    return (
        <div className='ongoing'>
            <h2>Ongoing</h2>
            <ul>
                {ongoings.map((ongoing, index) => (
                    <div className="todoline" key={`${ongoing}-${index}`}>
                        <span className="todotask">{ongoing.name}</span>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Ongoings