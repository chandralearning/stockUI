import React,{Component} from 'react';


import {Card,Form,Button,Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
export default class AddStock extends Component{

    constructor(props) {
        super(props);
        this.state = {symbol:'',stock_name:'',stock_price:''}
        this.submitStock = this.submitStock.bind(this);
        this.stockChange = this.stockChange.bind(this);


    }
    submitStock(event){
    alert(this.state.symbol);
    event.preventDefault();

    }
    stockChange = event =>{
        this.setState({
        [event.target.name]:event.target.value

        });

    };
    render(){
            return(
                   <Card className={"border border-dark bg-dark text-white"}>
                        <Card.Header> <FontAwesomeIcon icon={faPlusSquare} />  Add Stock </Card.Header>
                            <Form onSubmit={this.submitStock} id="Stock_Form_id" >
                                <Card.Body>

                                    <Form.Row>
                                        <Form.Group as ={Col} controlId="formGridsymbol">
                                            <Form.Label>Stock Symbol</Form.Label>
                                            <Form.Control required autoComplete="off"
                                                name="symbol"
                                                type="test"
                                                value={this.state.symbol}
                                                onChange={this.stockChange}
                                                placeholder="Enter Stock Symbol" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridStock_Name">
                                            <Form.Label>Stock Name</Form.Label>
                                            <Form.Control
                                                   name = "Stock_Name"
                                                   type="test"
                                                   value={this.state.Stock_Name}
                                                   onChange={this.stockChange}
                                                   placeholder="Enter Stock Name" />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridprice">
                                            <Form.Label>Stock Price</Form.Label>
                                            <Form.Control
                                                    name = "price"
                                                    type="test"
                                                    value={this.state.price}
                                                    onChange={this.stockChange}
                                                    placeholder="Enter Stock Price" />
                                        </Form.Group>

                                     </Form.Row>
                                     <Button variant="primary" type="submit">
                                       Submit
                                     </Button>
                                </Card.Body>
                            </Form>





                                      </Card>


                    );

             }


    }


