import React, { useState } from 'react'
import CircleWord from './MyComponent/CircleWord'
import PlayerCard from './MyComponent/PlayerCard'

const TestComponent = (props) => {
    const playerdata = {
        Name: "Team Name",
        Player: ["Player 1", "Player 2"]
    }

    return(
        <div>
            Hello World
            <CircleWord word="12" color="green" />
            <PlayerCard PlayerData={playerdata}></PlayerCard>
        </div>
    )
}
export default TestComponent