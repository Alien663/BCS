import React, { useState } from 'react'
const SVGRetangle = (props) => {
    const size = 30
    const retangle = [
        {x:25, y:25},
        {x:325, y:25},
        {x:25, y:325},
        {x:325, y:325},
    ]

    return(
        <div>
            <svg width={400} height={400} style={{backgroundColor: "gray"}}>
                <line x1={retangle[0].x} x2={retangle[1].x} y1={retangle[0].y} y2={retangle[1].y} stroke="orange" fill="transparent" stroke-width="5"/>
                <line x1={retangle[0].x} x2={retangle[2].x} y1={retangle[0].y} y2={retangle[2].y} stroke="orange" fill="transparent" stroke-width="5"/>
                <line x1={retangle[1].x} x2={retangle[3].x} y1={retangle[1].y} y2={retangle[3].y} stroke="orange" fill="transparent" stroke-width="5"/>
                <line x1={retangle[2].x} x2={retangle[3].x} y1={retangle[2].y} y2={retangle[3].y} stroke="orange" fill="transparent" stroke-width="5"/>

                <line x1={retangle[0].x} x2={retangle[3].x} y1={retangle[0].y} y2={retangle[3].y} stroke="orange" fill="transparent" stroke-width="5"/>
                <line x1={retangle[1].x} x2={retangle[2].x} y1={retangle[1].y} y2={retangle[2].y} stroke="orange" fill="transparent" stroke-width="5"/>

                <rect x={retangle[0].x - (size/2)} y={retangle[0].y - (size/2)} width={size} height={size} stroke="black" fill="white" stroke-width="1"/>
                <rect x={retangle[1].x - (size/2)} y={retangle[1].y - (size/2)} width={size} height={size} stroke="black" fill="white" stroke-width="1"/>
                <rect x={retangle[2].x - (size/2)} y={retangle[2].y - (size/2)} width={size} height={size} stroke="black" fill="white" stroke-width="1"/>
                <rect x={retangle[3].x - (size/2)} y={retangle[3].y - (size/2)} width={size} height={size} stroke="black" fill="white" stroke-width="1"/>
            </svg>
        </div>
    )
}
export default SVGRetangle