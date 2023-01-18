import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './component/Header'
import Watched from './component/Watched'
import Watchlist from './component/Watchlist'
import Add from './component/Add'
import ContextProvider from './component/context/GlobalContext'




export default function App() {
  return (
    <div>
      <Router>
        <ContextProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<Watchlist/>} />
          <Route path='/watched' element={<Watched/>} />
          <Route path='/add' element={<Add/>} />
        </Routes>
        </ContextProvider>
      </Router>
      
    </div>
  )
}
