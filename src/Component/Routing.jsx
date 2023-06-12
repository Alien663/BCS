import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import GameList from './GameList'
import GameScore from './GameScore'
import TestComponent from './Test'
import Aboutus from './Aboutus'
import RoundRobin from './MyComponent/RoundRobin'
import Sample from '../Container/Sample'
import Main from './Main'
import NotfoundPage from './NotfoundPage'

const Routing = (props) => {
    return(
        <Routes>
            <Route path='gamelist' element={ <GameList /> }></Route>
            <Route path='gamescore' element={ <GameScore /> }></Route>
            <Route path="test" element={ <TestComponent /> }></Route>
            <Route path='aboutus' element={ <Aboutus />}></Route>
            <Route path='sample' element={ <Sample /> }></Route>
            <Route path='roundrobin' element={ <RoundRobin />}></Route>
            <Route path='/' element={ <Main /> } />
            <Route path='*' element={ <NotfoundPage /> }></Route>
          </Routes>
    )
}
export default Routing