import React, { Component } from 'react';
import { AppContext } from '../AppProvider';

 export default class Home extends Component{
     constructor(props){
         super(props)
         this.state ={

         }
     }
    render(){
        const {getData} = this.context;
        let data = getData()
        console.log(data) 
         return(
            <div>
                Home
            </div>
         )
     }
 }

 Home.contextType = AppContext;