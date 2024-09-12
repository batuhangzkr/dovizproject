import React from 'react'
import '../css/styles.css'

function euro({props}) {
    console.log(props.euro)
    return (
        <div>
            <img src="src/images/euro.png" alt="dolar icon" width={200} height={200} />
            <div className='gosterge'>
                {props.europrop}
            </div>
        </div>
    )
}

export default euro