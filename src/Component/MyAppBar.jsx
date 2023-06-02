import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const MyAppBar = (props) => {
    const { open, styles, handlebutton } = props

    return(
        <AppBar position="fixed" open={open} sx={styles}>
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" onClick={handlebutton} aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <IconButton href='/' style={{color:"white"}}>Badminton Competition System</IconButton>
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
    )
}
export default MyAppBar