import React,{Component} from 'react';

import { Jumbotron} from 'react-bootstrap';

export default class Welcome extends Component {

    render(){
        return (
        <Jumbotron  className="bg-dark text-white">
          Welcome to My Stock Information
        </Jumbotron>

        );
    }



}
