import React, { Component } from 'react';
import { AppContext } from '../AppProvider';

 export default class Order extends Component{
    constructor(props){
        super(props)
        this.state ={
            
        }
    }
    render(){
        const {productData} = this.context;
        console.log(productData) 
         return(
            <div>
                Order
            </div>
         )
     }
 }

 Order.contextType = AppContext;