import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/counter';
import Feed from './components/feed';
import Profile from './components/profile';
import Patients from './components/patients';
import Pathology from './components/pathology';
import Surgery from './components/surgery';
import TumorBoardTable from './components/tumorBoardTable';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

const rounting = (
    <Router>
        <React.Fragment>
            <Route exact path="/" component = {App} />
            <Route path="/Patients" component = {Patients}/>
            <Route path="/Pathology" component = {Pathology}/>
            <Route path="/Surgery" component = {Surgery}/>
        </React.Fragment>
    </Router>


)


ReactDOM.render(rounting, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
