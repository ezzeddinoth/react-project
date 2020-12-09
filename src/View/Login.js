import React, { Component } from 'react';
import './Login.css';
import{getRolle} from '../Service/LoginService';

export default class Login extends Component {

     constructor(){
        super();
        this.state = {
            name: "",
            password:""
        }
        this.setVariables = this.setVariables.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    
    async setVariables(e){
        e.preventDefault();   
        await getRolle(this.state.name,this.state.password).then(res=>this.setState({rolle: res})); 
        this.state.rolle? alert('YOU ARE '+this.state.rolle) :
        alert('YOU ARE NOT AUTHORIZED')  
    }

    handleCancel(){
        this.setState ({name: "",password:""});
       
    }

    render() {
        
        return(         
            <form onSubmit={this.setVariables} method="post">
                 <div className="imgcontainer">
                  {/* <img src="img_avatar2.png" alt="Avatar" className="avatar"/>*/}
                 </div>
                 <div className="container">
                 <label for="uname"> <b>Username</b> </label>
                 <input  type="text" placeholder="Enter Username" value={this.state.name} 
                 onChange={e=>this.setState({name: e.target.value})} required></input>

                 <label for="psw"><b>Password</b></label>
                 <input  type="password" placeholder="Enter Password" value={this.state.password} 
                 onChange={e=>this.setState({password: e.target.value})} required></input>
                
                 <button  type="submit">Login</button>
                 <button type="button" onClick={this.handleCancel} class="cancelbtn">Cancel</button>
                 </div>

                 {/*<div class="container">
                    <button type="button" onClick={this.handleCancel} class="cancelbtn">Cancel</button>
                 <p>
                    <span class="psw">Forgot <a href="#">password?</a></span>
                 </p>
                </div>*/}
            </form>
        )
      }
}