import React, { Component } from 'react';
import './Login.css';
import{getRolle} from '../Service/LoginService';

export default class Login extends Component {

     constructor(){
        super();
        this.state = {
            name: "",
            password:"", 
            RememberMe: false
        }
        this.setVariables = this.setVariables.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.isAdmin = this.isAdmin.bind(this); 
    }
    
    async setVariables(e){
        e.preventDefault();   
        await getRolle(this.state.name,this.state.password).then(res=>this.setState({rolle: res})); 
        this.state.rolle? alert('YOU ARE '+this.state.rolle) :
        alert('YOU ARE NOT AUTHORIZED')  
    }

    isAdmin(){  
        this.state.rolle? this.state.rolle.isAdmin? alert("You are Admin"):alert("You are User")
        : alert('accessNotAllowed');     
    }



    handleCancel(){
        this.setState ({name: "",password:""});
       
    }

    handleCheckBox(){
         var  r=this.state.RememberMe;
         this.setState({RememberMe: !r})
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
                 <p>{/*<label> */}
                 <input type="checkbox" checked={ this.state.RememberMe }
                 onClick={ this.handleCheckBox } name="remember"/> Remember me
                 </p>{/*</label> */}
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