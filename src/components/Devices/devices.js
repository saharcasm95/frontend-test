import React from "react";
import './devices.scss';
import { Button,  Modal } from 'react-bootstrap';
import { Route } from 'react-router';

class Devices extends React.Component{
    constructor(props) {
        super(props)
        this.state = {//hardcoded data for testing & view design
            //don't forget to remove this.
          devices:[
              {"id": 0, "name": "Malinde"},
              {"id": 1, "name": "Muffin"},
              {"id": 2, "name": "Gerianne"},
              {"id": 3, "name": "Noreen"},
              {"id": 4, "name": "Yalonda"},
              {"id": 5, "name": "Tamqrah"},
              {"id": 6, "name": "Denni"},
              {"id": 7, "name": "Francine"}
            ],
        }
    }
    
    poolDevices = () => {//gets devices from API
        fetch('http://35.201.2.209/devices', {
          method: 'get',    
          headers: {'Content-Type':'application/json'},    
        }).then((response) => {
            // devices = response; 
          console.log(response);
        }).catch((error) => {
          alert("Invalid username or password");
        })
    }
    
    componentDidMount = () =>{//hits poolDevices every 5 seconds
        setInterval(() => {
            this.poolDevices()
        }, 5000);
    }
    
    notify = () => {//notifies completion of task.
        fetch('http://35.201.2.209/notify', {
          method: 'post',    
        
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            name: 'Noor e Sahar',
            email: 'nooresahar95@gmail.com',
            repoUrl: 'https://github.com/saharcasm95/frontend-test',
            message: 'Please hire me, I am broke. Because as a developer I have used up all of my Cache. Also, I really like this company :)',
        })}).then((response) => {
          alert("Notified!")
          console.log(response);
        }).catch((error) => {
          alert("API error");
        });
      }
     

    render(){
        
        
        return(
          <div id="devices-wrapper">
            <div className="devices-info">
              <div className="devices-online">{this.state.devices.length}</div>
              <div className="devices-label">
                <p>Devices</p> 
                <p>Online</p>
              </div>


            </div> 

            <div className="button-group">
              <Button
                  type='button'
                  className="notify-button"
                  variant="primary"
                  onClick={this.notify}>
                  Notify
              </Button>
              <Button
                  type='button'
                  className="logout-button"
                  variant="primary"
                  onClick={this.logout}>
                  Log out
                </Button>

            </div>

            
          </div>



        )


      }

}

export default Devices