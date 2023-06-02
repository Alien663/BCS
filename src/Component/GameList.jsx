import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import MyGrid from './MyGrid/MyGrid'
import { Button } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const GameList = (props) => {
    const data = [
        {
            "CompetitionID": "男單 1",
            "Team1": "Alien",
            "Team2": "Oromorph"
        },
        {
            "CompetitionID": "男單 2",
            "Team1": "Alien",
            "Team2": "Oromorph"
        },
        {
            "CompetitionID": "男單 3",
            "Team1": "Alien",
            "Team2": "Oromorph"
        },
        {
            "CompetitionID": "男單 4",
            "Team1": "Alien",
            "Team2": "Oromorph"
        },
        {
            "CompetitionID": "男單 5",
            "Team1": "Alien",
            "Team2": "Oromorph"
        },
        {
            "CompetitionID": "男單 6",
            "Team1": "Alien",
            "Team2": "Oromorph"
        },
        {
            "CompetitionID": "男單 7",
            "Team1": "Alien",
            "Team2": "Oromorph"
        },
        {
            "CompetitionID": "男單 8",
            "Team1": "Alien",
            "Team2": "Oromorph"
        },
        {
            "CompetitionID": "男單 9",
            "Team1": "Alien",
            "Team2": "Oromorph"
        },
        {
            "CompetitionID": "男單 10",
            "Team1": "Alien",
            "Team2": "Oromorph"
        },
        {
            "CompetitionID": "男單 11",
            "Team1": "Alien",
            "Team2": "Oromorph"
        },
        {
            "CompetitionID": "男單 12",
            "Team1": "Alien",
            "Team2": "Oromorph"
        },
        {
            "CompetitionID": "男單 1",
            "Team1": "Alien",
            "Team2": "Oromorph"
        },
        {
            "CompetitionID": "男單 13",
            "Team1": "Alien",
            "Team2": "Oromorph"
        },
        {
            "CompetitionID": "男單 14",
            "Team1": "Alien",
            "Team2": "Oromorph"
        }
    ]

    let twoDData = []
    let temp = []
    data.forEach((item, idx) => {
        if(idx%5 === 4){
            twoDData.push(temp)
            temp = []
        }
        else{
            temp.push({
                md: 1,
                children : <Button>
                            <Item>
                                {item.CompetitionID}<br/>
                                {item.Team1}<br/>
                                {item.Team2}
                            </Item>
                        </Button>
            })
        }
    })
    
    return(
        <div>
            <MyGrid data={twoDData}>
            </MyGrid>
        </div>
    )
}
export default GameList