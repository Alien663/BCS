import React, { useState } from 'react'
const SVGPentagon = (props) => {
    const size = 30
    const pentagon = [
        {x:200, y:25},
        {x:38, y:143},
        {x:362, y:143},
        {x:100, y:332},
        {x:300, y:332},
    ]
    return(
        <div>
            <svg width={400} height={400} style={{backgroundColor: "gray"}}>
                <line x1={pentagon[0].x} x2={pentagon[1].x} y1={pentagon[0].y} y2={pentagon[1].y} stroke="orange" fill="transparent" stroke-width="5"/>
                <line x1={pentagon[0].x} x2={pentagon[2].x} y1={pentagon[0].y} y2={pentagon[2].y} stroke="orange" fill="transparent" stroke-width="5"/>
                <line x1={pentagon[1].x} x2={pentagon[3].x} y1={pentagon[1].y} y2={pentagon[3].y} stroke="orange" fill="transparent" stroke-width="5"/>
                <line x1={pentagon[2].x} x2={pentagon[4].x} y1={pentagon[2].y} y2={pentagon[4].y} stroke="orange" fill="transparent" stroke-width="5"/>
                <line x1={pentagon[3].x} x2={pentagon[4].x} y1={pentagon[3].y} y2={pentagon[4].y} stroke="orange" fill="transparent" stroke-width="5"/>

                <line x1={pentagon[0].x} x2={pentagon[3].x} y1={pentagon[0].y} y2={pentagon[3].y} stroke="orange" fill="transparent" stroke-width="5"/>
                <line x1={pentagon[0].x} x2={pentagon[4].x} y1={pentagon[0].y} y2={pentagon[4].y} stroke="orange" fill="transparent" stroke-width="5"/>
                <line x1={pentagon[1].x} x2={pentagon[2].x} y1={pentagon[1].y} y2={pentagon[2].y} stroke="orange" fill="transparent" stroke-width="5"/>
                <line x1={pentagon[1].x} x2={pentagon[4].x} y1={pentagon[1].y} y2={pentagon[4].y} stroke="orange" fill="transparent" stroke-width="5"/>
                <line x1={pentagon[2].x} x2={pentagon[3].x} y1={pentagon[2].y} y2={pentagon[3].y} stroke="orange" fill="transparent" stroke-width="5"/>

                <rect x={pentagon[0].x - (size/2)} y={pentagon[0].y - (size/2)} width={size} height={size} stroke="black" fill="white" stroke-width="1"/>
                <rect x={pentagon[1].x - (size/2)} y={pentagon[1].y - (size/2)} width={size} height={size} stroke="black" fill="white" stroke-width="1"/>
                <rect x={pentagon[2].x - (size/2)} y={pentagon[2].y - (size/2)} width={size} height={size} stroke="black" fill="white" stroke-width="1"/>
                <rect x={pentagon[3].x - (size/2)} y={pentagon[3].y - (size/2)} width={size} height={size} stroke="black" fill="white" stroke-width="1"/>
                <rect x={pentagon[4].x - (size/2)} y={pentagon[4].y - (size/2)} width={size} height={size} stroke="black" fill="white" stroke-width="1"/>
            </svg>
        </div>
    )
}
export default SVGPentagon