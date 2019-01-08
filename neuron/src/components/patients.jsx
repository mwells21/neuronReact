import React, { Component } from 'react';
import AppNav from './appNav';
import TumorBoardTable from './tumorBoardTable';
class Patients extends Component {

    render() { 
        return ( 
        <React.Fragment>
            <AppNav></AppNav>
            <h1 style = {{padding: '20px'}}>Tumor Board</h1>
            <TumorBoardTable/>
        </React.Fragment> 
        );
    }
}
 
export default Patients;