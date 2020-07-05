import React, {Component} from 'react';
import {Card,Table} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';


export default class StockList extends Component{

    constructor(props) {
        super(props);
        this.state = {
        stocks : []
        };
    }

    componentDidMount() {
            axios.get("http://localhost:8080/rest/mystockinfo/all")
            .then(response => response.data)
            .then((data)=> {

            this.setState({stocks:data});



            });



    }

        render(){
            return(
                   <Card className={"border border-dark bg-dark text-white"}>
                   <Card.Header> <FontAwesomeIcon icon={faList} /> StockList </Card.Header>
                   <Card.Body>
                   <Table  className={"border border-dark bg-dark text-white"} bordered hover striped variant="dark">
                     <thead>
                       <tr>
                         <th>#</th>
                         <th>Symbol</th>
                         <th>Stock Name</th>
                         <th>Stock Price</th>
                       </tr>
                     </thead>
                     <tbody>

                     {
                       this.state.stocks.length === 0 ?
                       <tr align="center">
                         <td colSpan="6">No Stcoks Available</td>

                       </tr> :
                            this.state.stocks.map((stock) => (
                       <tr key={stock.stock_Symbol}>
                         <td ></td>
                         <td >{stock.stock_Symbol}</td>
                         <td >{stock.stock_Name}</td>
                         <td >{stock.stock_Price}</td>

                       </tr>
                        ))

                       }
                     </tbody>
                   </Table>
                   </Card.Body>

                   </Card>



                    );


             }


    }

