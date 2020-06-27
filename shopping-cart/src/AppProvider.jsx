import React, {Component, createContext} from 'react';
import data from './data.json';

export const AppContext = createContext() 

class AppProvider extends Component{
    constructor(props){
        super(props)
        this.state = {
            productData:data,
            cartArray:[],
            orderArray:[]
        }
    }
    getData = () => {
        return this.state.productData
    }

    getCart = () => {
        return this.state.cartArray
    }

    getOrder = () => {
        return this.state.orderArray
    }

    addTocart=(payload)=>{
        let item=this.state.productData.find(ele=>ele.id==payload)
        this.setState({
            cartArray:[...this.state.cartArray,item]
        })
    }

    addToOrder=(payload)=>{
        this.setState({
            orderArray:[...this.state.orderArray,payload]
        })
    }

    render(){
        const method = {
            getData : this.getData,
            addTocart:this.addTocart,
            getCart:this.getCart,
            addToOrder:this.addToOrder,
            getOrder:this.getOrder
        }
        return(
            <AppContext.Provider value={ method }>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider;