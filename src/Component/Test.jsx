import React, { useState } from 'react'
import SVGTriangle from './MyComponent/SVGTriangle'
import SVGRetangle from './MyComponent/SVGRetangle'
import SVGPentagon from './MyComponent/SVGPentagon'

const TestComponent = (props) => {
    return(
        <div>
            <SVGTriangle />
            <SVGRetangle />
            <SVGPentagon />
        </div>
    )
}
export default TestComponent