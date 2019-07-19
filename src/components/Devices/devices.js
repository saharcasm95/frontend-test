import React from "react";
import './devices.scss';
import { Button,  Modal } from 'react-bootstrap';
import { Route } from 'react-router';
import { post} from "../../helpers/apiClient";

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
            response.json().then(data => {
              console.log(this.state.devices);

              this.setState({devices: data.devices});
              
            });
        }).catch((error) => {
          alert("Invalid username or password");
        })
    }
    
    componentDidMount = () =>{//hits poolDevices every 5 seconds
        setInterval(() => {
            this.poolDevices()
        }, 5000);
    }
    logout = (history) => {
      localStorage.removeItem('jwtTestApp');
      history.push('/'); //remove authentication       
    }
    
    notify = async () => {

      try{
        const response = await post('notify',{
            name: 'Noor e Sahar',
            email: 'nooresahar95@gmail.com',
            repoUrl: 'https://github.com/saharcasm95/frontend-test',
            message: 'Please hire me, I am broke. Because as a developer I have used up all of my Cache. Also, I really like this company :)',
      });
        alert("Notified!")
        console.log(response);
      } catch(ex) {
        alert("API error");
      }

    }

    render(){
      var topPosition = 0, leftPosition = 0;
        var devices = this.state.devices.map(function(i) {
          topPosition += 25;
          leftPosition += 25;
          return (
            <div key={i.id} className="circle-container" style={{top: topPosition, left: leftPosition}}>
              <div className="circle" ></div>
            </div>
          );
      });

        return(
          <div id="devices-wrapper">
            <div className="devices-info">
              <div className="devices-online">{this.state.devices.length}</div>
              <div className="devices-label">
                <p>Devices</p> 
                <p>Online</p>
              </div>
              <div className="animation-container">
                {devices}
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
              <Route render={({ history}) => (
                <Button
                  type='button'
                  className="logout-button"
                  variant="primary"
                  onClick={() => {this.logout(history)}}>
                  Log out
                </Button>
              )} />

            </div>

            
          </div>



        )


      }

}

export default Devices