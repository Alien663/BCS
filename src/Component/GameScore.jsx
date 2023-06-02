import React, { useState } from 'react'
import { Card, CardContent } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'
import Face6Icon from '@mui/icons-material/Face6';

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

        
        <Card sx={{ maxWidth: 375 }} variant="outlined" style={{display:"inline-block", borderRadius: "10%"}}>
            <CardContent>
            <h2>{data.Team1.Name}</h2>
                <br />
                {
                    data.Team1.Player.map(item => {
                        return(
                            <div style={{fontSize: 25}}>
                                <FaceIcon sx={{ fontSize: 40, marginRight:"10px" }}/>
                                {item}
                            </div>
                        )
                    })
                }
                <br />
            </CardContent>
        </Card>
        <div style={{display:"inline-block"}}>
            <div className='score-circle'>
                <div>{data.Team1.Score}</div>
            </div>
            <h3 style={{display:"inline-block", marginBottom:"5px"}}>:</h3>
            <div className='score-circle'>
                <div>{data.Team2.Score}</div>
            </div>
        </div>
        

        
        <Card sx={{ maxWidth: 375 }} variant="outlined" style={{display:"inline-block", borderRadius: "10%"}}>
            <CardContent>
                <h2>{data.Team2.Name}</h2>
                <br />
                {
                    data.Team2.Player.map(item => {
                        return(
                            <div style={{fontSize: 25}}>
                                <Face6Icon sx={{ fontSize: 40, marginRight:"10px" }}/>
                                {item}
                            </div>
                        )
                    })
                }
                <br />
            </CardContent>
        </Card>
    </div>
  )
}
export default GameScore