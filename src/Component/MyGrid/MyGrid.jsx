import React from 'react'
import Grid from '@mui/material/Grid';

const MyGrid = (props) => {
    const { data } = props
    console.log(data)
    if(data.length === 0){
      return(<div>no data</div>)
    }
    return(<div style={{backgroundColor: "rgb(215 215 215)"}}>
    {
        data.map(row => {
            console.log("------row------")
            console.log(row)
            console.log("---------------")
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
export default MyGrid