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
    submit =  () => {

    }

    render(){
        return (
        <div className="input-group mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter Movie Name"
            value={this.state.inputMovie}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <div className="input-group-append">
            <button 
              type="button" 
              className="btn btn-info" 
              onClick={this.submit}>
              Add
            </button>
          </div>
        </div>
        );
    }
}

export default Login