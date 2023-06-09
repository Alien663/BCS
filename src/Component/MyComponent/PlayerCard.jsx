import React, { useState } from 'react'
import { Card, CardContent } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'
import Face2Icon from '@mui/icons-material/Face2'
import Face3Icon from '@mui/icons-material/Face3'
import Face4Icon from '@mui/icons-material/Face4'
import Face5Icon from '@mui/icons-material/Face5'
import Face6Icon from '@mui/icons-material/Face6';

const PlayerCard = (props) => {
    const { PlayerData } = props
    const randomFaceIcon = () => {
        switch(Math.floor(Math.random() * 6)){
            case 0:
                return <Face6Icon sx={{ fontSize: 40, marginRight:"10px" }} />
            case 1:
                return <FaceIcon sx={{ fontSize: 40, marginRight:"10px" }} />
            case 2:
                return <Face2Icon sx={{ fontSize: 40, marginRight:"10px" }} />
            case 3:
                return <Face3Icon sx={{ fontSize: 40, marginRight:"10px" }} />
            case 4:
                return <Face4Icon sx={{ fontSize: 40, marginRight:"10px" }} />
            case 5:
                return <Face5Icon sx={{ fontSize: 40, marginRight:"10px" }} />
        }
    }


    return(
        <Card sx={{ maxWidth: 375, minWidth: 250, display:"inline-block", borderRadius: "10%", textAlign: "center" }} variant="outlined">
            <CardContent>
                <h2>{PlayerData.Name}</h2>
                <br />
                {
                    PlayerData.Player.map(item => {
                        return(
                            <div style={{fontSize: 25}}>
                                {
                                    randomFaceIcon()
                                }
                                <p style={{display: "inline-block", verticalAlign: "super"}}>{item}</p> 
                            </div>
                        )
                    })
                }
                <br />
            </CardContent>
        </Card>
    )
}
export default PlayerCard