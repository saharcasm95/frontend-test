import React from "react";
import './devices.scss';


class Devices extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
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

   
      
     

      render(){
        return(
            <div>Devices</div>
        );
        
      }

}

export default Devices