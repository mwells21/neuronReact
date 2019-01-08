import React, { Component } from 'react';
import SimpleMap from './map';
import AppNav from './appNav';
import axios from 'axios';

import { Container, Row, Col, ListGroup, ListGroupItem, UncontrolledCollapse, Button, CardBody, Card  } from 'reactstrap';

class Trials extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false,
                        trials: [
                            {
                                uuid:"1",
                                name:"Glioma Trial",
                                information:"This trial is for patients that are over 18 years old with low or high grade glioma",
                                city: "Detroit",
                                lng: "-83.0458",
                                lat:"42.3314"

                            },
                            {
                                uuid:"2",
                                name:"Brian Tumor Trial",
                                information:"This trial is for patients that are over 18 years old with low or high grade glioma",
                                city: "Detroit",
                                lng: "-83.0458",
                                lat:"42.3314"
                            }
                        ] };
      }
    toggle() {
     this.setState({ collapse: !this.state.collapse });
    }
    render() { 
        return (
            <React.Fragment>
                <AppNav></AppNav>
                <Row>
                    <Col  sm={{ size: '7', offset: 1 }}>
                        <SimpleMap></SimpleMap>
                    </Col>
                    <Col>
                    <ListGroup>
                        <ListGroupItem id="toggler1" tag = "button" action>
                          Trial 1  
                        </ListGroupItem>
                            <UncontrolledCollapse toggler="#toggler1">
                                <Card>
                                    <CardBody>
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                                    </CardBody>
                                </Card>
                            </UncontrolledCollapse>
                        <ListGroupItem id="toggler2" tag = "button" action>
                            Trial 2
                        </ListGroupItem>
                            <UncontrolledCollapse toggler="#toggler2">
                                <Card>
                                    <CardBody>
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                                    </CardBody>
                                </Card>
                            </UncontrolledCollapse>
                        <ListGroupItem id="toggler3" tag = "button" action>
                            Trial 3
                        </ListGroupItem>
                            <UncontrolledCollapse toggler="#toggler3">
                                <Card>
                                    <CardBody>
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                                    </CardBody>
                                </Card>
                            </UncontrolledCollapse>
                        <ListGroupItem id="toggler4" tag = "button" action>
                            Trial 4
                        </ListGroupItem>
                            <UncontrolledCollapse toggler="#toggler4">
                                <Card>
                                    <CardBody>
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                                    </CardBody>
                                </Card>
                            </UncontrolledCollapse>
                        <ListGroupItem id="toggler5" tag = "button" action>
                            Trial 5
                        </ListGroupItem>
                            <UncontrolledCollapse toggler="#toggler5">
                                <Card>
                                    <CardBody>
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                                    </CardBody>
                                </Card>
                            </UncontrolledCollapse>

                    </ListGroup>                    
                    </Col>
                </Row>                
            </React.Fragment>
            
         );
    }
}
 
export default Trials;