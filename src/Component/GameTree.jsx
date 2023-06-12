import React, { useState } from 'react'
const GameTree = (props) => {
    const data = [
        {
            "ParentID": 0,
            "NodeID": 1,
            "Name": "root"
        },
        {
            "ParentID": 1,
            "NodeID": 2,
            "Name": "A"
        },
        {
            "ParentID": 1,
            "NodeID": 3,
            "Name": "B"
        },
        {
            "ParentID": 3,
            "NodeID": 4,
            "Name": "C"
        },
        {
            "ParentID": 3,
            "NodeID": 5,
            "Name": "D"
        },
        {
            "ParentID": 3,
            "NodeID": 6,
            "Name": "E"
        },
        {
            "ParentID": 1,
            "NodeID": 7,
            "Name": "F"
        },
        {
            "ParentID": 5,
            "NodeID": 8,
            "Name": "G"
        },
        {
            "ParentID": 5,
            "NodeID": 9,
            "Name": "H"
        },
        {
            "ParentID": 8,
            "NodeID": 10,
            "Name": "I"
        }
    ]

    const drawTree = () => {
        for(let row of data){
            let temp = data.filter(item => item.ParentID == row.NodeID)
            console.log(`I'm ${row.Name}, my children are : ${temp.map(item => {return item.Name})}`)
        }
    }

    return(
        <div>Hello World</div>
    )
}
export default GameTree