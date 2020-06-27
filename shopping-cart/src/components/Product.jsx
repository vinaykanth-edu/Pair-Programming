import React, { Component } from 'react';
import { AppContext } from '../AppProvider';

 export default class Product extends Component{
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
                Product
            </div>
         )
     }
 }

 Product.contextType = AppContext;