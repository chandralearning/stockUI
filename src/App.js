import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import AddStock from './components/AddStock';
import StockList from './components/StockList';

function App() {
    const marginTop = {
    marginTop:"20px"
    };
  return (
    <Router>
    <NavigationBar/>
    <Container>
      <Row>
               <Col lg={12} style={marginTop}>
               <Switch>
                    <Route path="/" exact component={Welcome}/>
                    <Route path="/add" exact component={AddStock}/>
                    <Route path="/list" exact component={StockList}/>

               </Switch>

                </Col>

       </Row>
     </Container>
     <Footer/>
    </Router>
  );
}

export default App;

