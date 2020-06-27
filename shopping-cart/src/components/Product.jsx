import React, { Component } from 'react';
import { AppContext } from '../AppProvider';
import SingleItem from './SingleItem';

 export default class Product extends Component{
    constructor(props){
        super(props)
        this.state ={
            productItems:[]
        }
    }

    componentDidMount(){
        let {id}=this.props.match?this.props.match.params:''
        const {getData}=this.context
        let productData=getData()

        if(id){
            let item=productData.find(ele=>ele.id==id)
            this.setState({
                productItems:[...this.state.productItems,item]
            })
        }

        if(!id){
            this.setState({
                productItems:productData
            })
        }
    }

    render(){
        const {productItems}=this.state
         return(
            <div>
                {
                    productItems && productItems.map((ele,index)=>{
                        return(
                            <SingleItem data={ele} />
                        )
                    })
                }
            </div>
         )
     }
 }

 Product.contextType = AppContext;