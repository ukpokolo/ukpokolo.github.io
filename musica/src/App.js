import React from 'react'
import CurratedPlaylist from './components/CurratedPlaylist/CurratedPlaylist'
import './App.css'
import TopCharts from './components/TopCharts/TopCharts'
import { Route, Routes } from 'react-router-dom'

import NewReleases from './components/NewReleases/NewReleases'
import PopularInYourArea from './components/popularInYourArea/PopularInYourArea'
import NavBar from './components/NavBar/NavBar'
import ViewChart from './Pages/view chart/ViewChart'
import MyCollection from './Pages/my collection/MyCollection'
function App() {
  return (
    <div>
      <NavBar/>
      {/* <CurratedPlaylist/>
      <TopCharts/>
     <NewReleases/>
    <PopularInYourArea/> */}
    {/* <ViewChart/> */}
    <MyCollection/>
    </div>
  )
}

export default App