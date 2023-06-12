import React, { useState } from 'react'
import SVGTriangle from './SVGTriangle'
import SVGRetangle from './SVGRetangle'
import SVGPentagon from './SVGPentagon'

const RoundRobin = (props) => {
    return(
        <div>
            <SVGTriangle />
            <SVGRetangle />
            <SVGPentagon />
        </div>
    )
}
export default RoundRobin