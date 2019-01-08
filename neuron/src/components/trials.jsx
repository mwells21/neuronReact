import React, { Component } from 'react';
import SimpleMap from './map';
import AppNav from './appNav';
import { Container, Row, Col } from 'reactstrap';

class Trials extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <AppNav></AppNav>
                <Row>
                    <Col  sm={{ size: '7', offset: 1 }}>
                        <SimpleMap></SimpleMap>
                    </Col>
                    <Col>
                    </Col>
                </Row>                
            </React.Fragment>
            
         );
    }
}
 
export default Trials;