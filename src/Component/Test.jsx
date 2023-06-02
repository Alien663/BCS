import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Button} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const TestComponent = (props) => {
    const data = [
        [
            {
                children: <Button size="large"><Item>123</Item></Button>,
                md: 1,
            },
            {
                children: <Button size="large"><Item>123</Item></Button>,
                md: 1,
            },
            {
                children: <Button size="large"><Item>123</Item></Button>,
                md: 1,
            },
            {
                children: <Button size="large"><Item>123</Item></Button>,
                md: 1,
            },
            {
                children: <Button size="large"><Item>123</Item></Button>,
                md: 1,
            },
        ],
         [
            {
                children: <Button size="large"><Item>123</Item></Button>,
                md: 1,
            },
            {
                children: <Button size="large"><Item>123</Item></Button>,
                md: 1,
            },
            {
                children: <Button size="large"><Item>123</Item></Button>,
                md: 1,
            },
            {
                children: <Button size="large"><Item>123</Item></Button>,
                md: 1,
            },
            {
                children: <Button size="large"><Item>123</Item></Button>,
                md: 1,
            },
        ]
    ]

    return(<div style={{backgroundColor: "rgb(215 215 215)"}}>
    {
        data.map(row => {
            return(
                <Grid container spacing={1} justifyContent="center" alignItems="center">
                {
                    row.map(col => {
                        return(<Grid item xs={6} md={col.md}>{col.children}</Grid>)
                    })
                }
                </Grid>
            )
        })
    }</div>)
}
export default TestComponent