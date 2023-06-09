import React, { useState } from 'react'
import { Box, Toolbar } from '@mui/material'
import Routing from '../Component/Routing';
import MyAppBar from '../Component/MyAppBar';
import MyLeftToolBar from '../Component/MyLeftToolBar';

import '../Style/App.css';

function App() {
  const [showDrawer, setDrawer] = useState(false)

  const handleDrawer = () => {
    setDrawer(!showDrawer)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MyAppBar open={showDrawer} handlebutton={handleDrawer} styles={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} />

      <MyLeftToolBar />
      <MyLeftToolBar open={showDrawer} />

      <div>
        <Toolbar />
        <Routing></Routing>
      </div>
    </Box>
  );
}

export default App;
