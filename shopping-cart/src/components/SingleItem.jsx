import React, {useContext} from "react";
import {AppContext} from "../AppProvider";
import { Link, Redirect } from "react-router-dom";

function SingleItem(props){
    const {data}=props
    const item=useContext(AppContext)
    const {addTocart, getAuth}=item

    // const loginCheck = (payload) => {
    //     console.log("loginCheck", getAuth(), props.history)
    //     if(getAuth()){
    //         return addTocart(payload)
    //     }
    //     else
    //     {
    //         return (<Redirect to={props.history.go("/login")} />)
    //         // console.log("else")
    //     }    
    // }
    return(
        <div className="container">
             <table className="table table-hover table-dark">
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
                    <td><Link to={`/product/${data.id}`}>{data.name}</Link></td>
                    <td>{data.price}</td>
                    <td> <Link to={`/product/${data.id}`}>< img src={data.src} alt={data.name} width="100" 
                    height="100" /></Link></td>
                    <td><button className="btn btn-outline-warning" onClick={()=>addTocart(data.id)}>Add to Cart</button></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SingleItem;