import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'

function App() {
  const commands = [
    {
      command: ['Go to * page', 'Go to *', 'Open * page', 'Open *'],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ]

  const { transcript } = useSpeechRecognition({ commands })
  const [redirectUrl, setRedirectUrl] = useState('')
  const pages = ['home', 'cart', 'profile', 'login']
  const urls = {
    home: '/',
    profile: '/profile',
    cart: '/cart',
    login: '/login',
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  let redirect = ''

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Redirect to={urls[redirectUrl]} />
    } else {
      redirect = <p>Could not find page: {redirectUrl}</p>
    }
  }

  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <p id='transcript'>Speech: {transcript}</p>
          <button onClick={SpeechRecognition.startListening}>Start</button>

          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/' component={HomeScreen} exact />
          {redirect}
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
