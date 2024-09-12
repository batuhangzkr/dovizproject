import React from 'react'
import '../css/styles.css'

function dolar({ props }) {
    return (
        <div>
            <img src="src\images\dolar.png" alt="dolar icon" width={200} height={200} />
            <div className='gosterge'>
                {props.dolarprop}
            </div>
        </div>
    )
}

export default dolar