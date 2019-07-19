import React from "react";
import './devices.scss';

class Devices extends React.Component{
    constructor(props) {
        super(props)
        this.state = {//hardcoded data for testing & view design
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
      
     

      render(){
        return(
            <div>Devices</div>
        );
        
      }

}

export default Devices