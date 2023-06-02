import React from 'react'

import {
    Toolbar,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
  } from '@mui/material'

const MyLeftToolBar = (props) => {
    const { open } = props
    
    const ListItems = [
      {
        "Name": "Game List",
        "URL": "/gamelist",
        "Icon": ""
      },
      {
        "Name": "Score",
        "URL": "/gamescore",
        "Icon": ""
      },
      {
        "Name": "Test Page",
        "URL": "/test",
        "Icon": ""
      },
      {
        "Name": "About us",
        "URL": "/aboutus",
        "Icon": ""
      },
      {
        "Name": "Sample",
        "URL": "/sample",
        "Icon": ""
      },
    ]

    return(
      <Drawer variant="persistent"
          sx={{
            width: 200,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 180, boxSizing: 'border-box' },
          }}
          open={open}
          >
        <Toolbar />
        <List>
        {
          ListItems.map(item => {
            return(
              <ListItem>
                <ListItemButton href={item.URL}
                  sx={{
                    minHeight: 48,
                    justifyContent: 'initial',
                    px: 2.5,
                  }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 3,
                      justifyContent: 'center',
                    }} />
                  <ListItemText primary={item.Name} sx={{opacity: 1}}></ListItemText>
                </ListItemButton>
              </ListItem>
            )
          })
        }
        </List>
      </Drawer>
    )
}
export default MyLeftToolBar