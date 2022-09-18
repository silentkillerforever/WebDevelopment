import React,{Component} from "react";

export class Home extends Component{
    render(){
        return (
            <div className="mt-5 d-flex justify-content-left">
                <h1>Welcome to Employee Management portal. This is home page</h1>
                <button className="Login-btn">Login</button>
                <button className="Sign-up-btn">Sign Up</button>
            </div>
        )
    }
}