import React, { useState } from 'react'
import CircleWord from './MyComponent/CircleWord';
import PlayerCard from './MyComponent/PlayerCard';

import '../Style/GameScore.css'

const GameScore = (props) => {
    const data = {
        Competition:"Men's Double : 67",
        Team1: {
            Name: "People on the Earth",
            Player: ["Ripley", "Shawn"],
            Score: 10
        },
        Team2: {
            Name: "Alien from LV-426",
            Player: ["Xenomorph", "Facehugger"],
            Score: 13
        }
    }

  return(
    <div style={{margin:"0 auto", textAlign:"center"}}>
        <div>
            <h2>{data.Competition}</h2>
        </div>
        <PlayerCard PlayerData={data.Team1}></PlayerCard>
        <div style={{display:"inline-block", verticalAlign: "top"}}>
            <div>
                <CircleWord style={{marginTop: "5px"}} word={data.Team1.Score}></CircleWord>
                <h3 style={{display:"inline-block", verticalAlign: "bottom"}}>:</h3>
                <CircleWord word={data.Team2.Score}></CircleWord>
            </div>
        </div>
        <PlayerCard PlayerData={data.Team2}></PlayerCard>
    </div>
  )
}
export default GameScore