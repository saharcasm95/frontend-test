import React from "react";
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import { Route } from 'react-router';
import { FaEnvelope, FaExclamationCircle } from 'react-icons/fa';
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
            <div id="login-wrapper" >
              <Modal.Dialog centered>
                <Modal.Header className="text-center">
                  <Modal.Title>Login</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="email-addon"><FaEnvelope /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                      type="text"
                      placeholder="Email Address"
                      aria-label="Email Address"
                      aria-describedby="email-addon"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="password-addon"><FaExclamationCircle /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      value={this.state.password}
                      onChange={(e) => this.setState({ password: e.target.value })}
                      type="text"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="password-addon"
                    />
                  </InputGroup>

                </Modal.Body>

                <Modal.Footer className="text-center">
                  <Button className="login-button" variant="primary" onClick={this.submit}>Log in</Button>
                </Modal.Footer>
              </Modal.Dialog>

            </div>
        );
    }
}

export default Login