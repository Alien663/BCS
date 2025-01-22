import React, { useState } from 'react'
import SVGTriangle from './MyComponent/SVGTriangle'
import SVGRetangle from './MyComponent/SVGRetangle'
import SVGPentagon from './MyComponent/SVGPentagon'

const TestComponent = (props) => {
    let aa = `<div>Hellow</div>`

    return(
        <div>
            <SVGTriangle />
            <SVGRetangle />
            <SVGPentagon />
        </div>
    )
}
export default TestComponent