import React, { Component } from 'react';
import { AppContext } from '../AppProvider';
import SingleItem from "../components/SingleItem";
import { Redirect } from 'react-router-dom';

 export default class Home extends Component{
     constructor(props){
         super(props)
         this.state ={
            optioName:''
         }
     }

     handleChange=(e)=>{
         this.setState({
            optioName:e.target.value
         })
     }
     componentWillReceiveProps(props){
        // if(this.props.)
     }
    render(){
        const {getData, getAuth} = this.context;
        let data = getData()
        // let auth = getAuth()
        // console.log(auth)
        // if(!auth ){
        //     return <Redirect to="/login" />
        // }
         return(
            <div>
                <select onChange={this.handleChange}>
                    <option value="all">All</option>
                    {
                        data && data.map(ele=>{
                            return(
                                <option value={ele.name}>{ele.name}</option>
                            )
                        })
                    }
                </select>
                {
                    data && data.filter(ele=>{
                        if(ele.name==this.state.optioName)
                            return true
                        if(this.state.optioName==='all' || this.state.optioName==='')
                            return true
                    }).map((ele,index)=>{
                        return(
                            <SingleItem key ={index} data={ele} history={this.props.history}/>
                        )
                    })
                }
            </div>
         )
     }
 }

 Home.contextType = AppContext;