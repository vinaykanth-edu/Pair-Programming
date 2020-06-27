import React, {Component, createContext} from 'react';
import data from './data.json';

export const AppContext = createContext() 

class AppProvider extends Component{
    constructor(props){
        super(props)
        this.state = {
            productData:data
        }
    }
    getData = () => {
        return this.state.productData
    }

    render(){
        const method = {
            getData : this.getData
        }
        return(
            <AppContext.Provider value={ method }>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider;