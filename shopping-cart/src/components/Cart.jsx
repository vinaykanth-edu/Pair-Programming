import React, { Component } from 'react';
import { AppContext } from '../AppProvider';
import { Redirect } from 'react-router-dom';

 export default class Cart extends Component{
    constructor(props){
        super(props)
        this.state ={
            name:'',
            email:'',
            phone:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        const {getCart,addToOrder, getAuth} = this.context;
        let data=getCart()
            if(!getAuth()){
                return ( <Redirect to="/login"/>)
            }
            else{
                return(
                    <div className="container">
                        <div>
                            <label>Name</label>
                            <input type="text" onChange={this.handleChange} name="name" />
                            <label>email</label>
                            <input type="text" onChange={this.handleChange} name="email" />
                            <label>phone</label>
                            <input type="text" onChange={this.handleChange} name="phone" />
                            <button onClick={()=>addToOrder({name:this.state.name,email:this.state.email,
                            phone:this.state.phone,data:data})} className="btn btn-outline-secondary">Plcae Order</button>
                        </div>
                        {
                            data && data.map((data,index)=>{
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
            }
        
     }
 }

 Cart.contextType = AppContext;