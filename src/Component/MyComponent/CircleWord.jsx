import React, { useState } from 'react'

import '../../Style/CircleWord.css'

const CircleWord = (props) => {
    const {word, size='small', color='gray'} = props

    return(
        <div className={'circle-wrap ' + size + ' ' + color}>
            <div>{word}</div>
        </div>
    )
}
export default CircleWord