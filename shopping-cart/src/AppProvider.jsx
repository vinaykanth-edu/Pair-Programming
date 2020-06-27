import React, {Component, createContext} from 'react';
import data from './data.json';

export const AppContext = createContext() 

class AppProvider extends Component{
    constructor(props){
        super(props)
        this.state = {
            productData:data,
            cartArray:[],
            orderArray:[],
            user:{
                username:"admin",
                password:"admin"
            },
            isAuth:null
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

    getAuth = () => {
        return this.state.isAuth
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

    loginClick = (payload) => {
        console.log(payload)
        const {name, password} = payload;
        if(name==this.state.user.username && password == this.state.user.password){
            this.setState({
                isAuth : true
            })
        }
    }



    render(){
        const method = {
            getData : this.getData,
            addTocart:this.addTocart,
            getCart:this.getCart,
            addToOrder:this.addToOrder,
            getOrder:this.getOrder,
            loginClick:this.loginClick,
            getAuth:this.getAuth
        }
        return(
            <AppContext.Provider value={ method }>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider;