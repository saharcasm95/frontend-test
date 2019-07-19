import React from "react";
import './login.scss'


class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          email: '',
          password: '',
          hasError: null
        }
    }
    submit = () => {
        fetch('http://35.201.2.209/login', {//add login endpoint here.
          method: 'post',    
          headers: {'Content-Type':'application/json'},    
          body: JSON.stringify({
              "email": this.state.email, 
              "password": this.state.password
            }
          )
        }).then((response) => {
          console.log(response);
        }).catch((error) => {
          alert("Invalid username or password");
        })
      }

    render(){
        return (
            <div className="input-group mb-3">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
            />
            <input 
                type="text" 
                className="form-control" 
                placeholder="Password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
            />

            <div className="input-group-append">
                <button 
                type="button" 
                className="btn btn-info"
                onClick={this.submit}>
                Login
                </button>
            </div>
          </div>
        );
    }
}

export default Login