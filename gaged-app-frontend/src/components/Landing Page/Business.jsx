import React from 'react'
import DigitalScore from './DigitalScore'
import RaiseFunds from './RaiseFunds'
import Investments from './Investments'

function Business() {
    return (
        <div className='pt-10 pb-20'>
            <RaiseFunds />
            <DigitalScore />
            <Investments />
        </div>
    )
}

export default Business
