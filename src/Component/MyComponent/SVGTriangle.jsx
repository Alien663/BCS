import React, { useState } from 'react'
const SVGTriangle = (props) => {
    const size = 30
    const triangle = [
        {x:200, y:25},
        {x:50, y:325},
        {x:350, y:325},
    ]
    return(
    <div>
        <svg width={400} height={400} style={{backgroundColor: "gray"}}>
            <line x1={triangle[0].x} x2={triangle[1].x} y1={triangle[0].y} y2={triangle[1].y} stroke="orange" fill="transparent" stroke-width="5"/>
            <line x1={triangle[0].x} x2={triangle[2].x} y1={triangle[0].y} y2={triangle[2].y} stroke="orange" fill="transparent" stroke-width="5"/>
            <line x1={triangle[1].x} x2={triangle[2].x} y1={triangle[1].y} y2={triangle[2].y} stroke="orange" fill="transparent" stroke-width="5"/>

            <rect x={triangle[0].x - (size/2)} y={triangle[0].y - (size/2)} width={size} height={size} stroke="black" fill="white" stroke-width="1"/>
            <rect x={triangle[1].x - (size/2)} y={triangle[1].y - (size/2)} width={size} height={size} stroke="black" fill="white" stroke-width="1"/>
            <rect x={triangle[2].x - (size/2)} y={triangle[2].y - (size/2)} width={size} height={size} stroke="black" fill="white" stroke-width="1"/>
        </svg>
    </div>
    )
}
export default SVGTriangle