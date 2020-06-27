import React, { Component } from 'react';
import { AppContext } from '../AppProvider';

 export default class Order extends Component{
    constructor(props){
        super(props)
        this.state ={
            
        }
    }
    render(){
        const {getOrder} = this.context;
        let data=getOrder()
         return(
            <div className="container">
                {
                    data && data.map((ele,index)=>{
                        return(
                            <div key={index}>
                                <div>
                                    <label>Name: {ele.name}</label>
                                        <label>email : {ele.email}</label>
                                        <label>phone : {ele.phone}</label>
                                    </div>
                                    {
                                        ele && ele.data.map((data,index)=>{
                                            return(
                                                <table key={index} className="table table-hover table-dark">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">Id</th>
                                                        <th scope="col">name</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Image</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <th scope="row">{data.id}</th>
                                                        <td>{data.name}</td>
                                                        <td>{data.price}</td>
                                                        <td><img src={data.src} alt={data.name} width="100" height="100" /></td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            )
                                        })
                                    }
                            </div>
                        )
                    })
                }
            </div>
         )
     }
 }

 Order.contextType = AppContext;