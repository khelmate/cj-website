import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AuthProvider from './contexts/AuthProvider';
import OrderProvider from './contexts/OrderProvider';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import ContactScreen from './screens/ContactScreen';
import ErrorScreen from './screens/ErrorScreen';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ProductsScreen from './screens/ProductsScreen';
import ServicesDetailScreen from './screens/ServicesDetailScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const App = () => {
  return (
    <BrowserRouter>
     
        <OrderProvider>
          <Navbar />
          <Switch>
            <Route exact path="/cj-website"><HomeScreen /></Route>
            <Route exact path="/cj-website/contact"><ContactScreen /></Route>
            <PublicRoute path="/cj-website/signup"><SignUpScreen /></PublicRoute>
            <PublicRoute path="/cj-website/signin"><SignInScreen /></PublicRoute>
            <PrivateRoute exact path="/cj-website/services/:title"><ServicesDetailScreen /></PrivateRoute>
            <Route exact path="/cj-website/products/"><ProductsScreen /></Route>
            <PrivateRoute exact path="/cj-website/products/:title"><ProductDetailScreen /></PrivateRoute>
            <PrivateRoute exact path="/cj-website/orders"><OrderScreen /></PrivateRoute>
            <Route path="*"><ErrorScreen /></Route>
          </Switch>
          <Footer />
        </OrderProvider>
     
    </BrowserRouter>
  )
}

export default App
