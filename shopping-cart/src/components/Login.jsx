import React, {Component} from 'react';
import { AppContext } from '../AppProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            password : ""
        }
    }

    handleChange = (e) => {
        return(
            this.setState({
                [e.target.name] : e.target.value
            })
        )
    }

    render(){

        const {loginClick, getAuth} = this.context
        let auth = getAuth()
        if(auth){
            return <Redirect to="/" />
        }
        console.log(auth)
        return(
           <div className="container w-50">
                <div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="name" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="text" name="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button onClick={()=>loginClick({name:this.state.name, password:this.state.password})} className="btn btn-primary">Submit</button>
                </div>
           </div>
        )
    }
}

Login.contextType = AppContext;
export default Login;