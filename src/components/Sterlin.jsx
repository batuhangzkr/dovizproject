import React from 'react'
import '../css/styles.css'

function sterlin({ props }) {
    return (
        <div>
            <img src="src/images/sterlin.png" alt="dolar icon" width={200} height={200} />
            <div className='gosterge'>
                {props.sterlinprop}
            </div>
        </div>
    )
}

export default sterlin