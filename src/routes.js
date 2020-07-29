import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from "react-router-dom";

//containersImport
import Homepage from './Containers/Homepage/Homepage'
import Filmpage from './Containers/Filmpage/Filmpage'


const Routes = () => (

    <BrowserRouter >
        < Switch >
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/film/:id" component={Filmpage}/>
        
        </Switch>
    </BrowserRouter>

);

export default Routes;