import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <Container>
         <main className='py-3'>
            <Routes>
                <Route path='/' exact element={<HomeScreen/>} />
                <Route path='/product/:id' element={<ProductScreen/>} />
            </Routes>
         </main>
       </Container>
       <Footer/>
    </BrowserRouter>
  )
}

export default App