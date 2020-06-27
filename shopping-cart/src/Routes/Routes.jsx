import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Product from '../components/Product';
import Cart from '../components/Cart';
import Order from '../components/Order';

const Routes = () =>{
    return(
        <Switch>
            <Route path="/" render = { ()=><Home /> } />
            <Route path="/product" render = { ()=><Product /> } />
            <Route path="/product/:id" render = { (props)=><Product {...props}/> } />
            <Route path="/cart" render = { ()=><Cart /> } />
            <Route path="/order" render = { ()=><Order /> } />
        </Switch>
    )
} 

export default Routes;