import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen.js'
import ProductScreen from './screens/ProductScreen.js'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' exact element={<HomeScreen/>} />
          {/* <Route path='/product/:id' component={ProductScreen} /> */}
       </Routes>
    </BrowserRouter>
  )
}

export default App