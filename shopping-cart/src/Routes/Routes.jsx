import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Product from '../components/Product';
import Cart from '../components/Cart';
import Order from '../components/Order';
import Login from '../components/Login';

const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/" render = { (props)=><Home {...props}/> } />
            <Route exact path="/product" render = { ()=><Product /> } />
            <Route exact path="/product/:id" render = { (props)=><Product {...props}/> } />
            <Route exact path="/cart" render = { ()=><Cart /> } />
            <Route exact path="/order" render = { ()=><Order /> } />
            <Route exact path="/login" render = { (props)=><Login {...props}/> } />
        </Switch>
    )
} 

export default Routes;