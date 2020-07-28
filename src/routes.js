import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from "react-router-dom";

//containersImport
import Homepage from './Containers/Homepage/Homepage'


const Routes = () => (

    <BrowserRouter >
        < Switch >
        <Route exact path="/" component={Homepage}/>
        
        </Switch>
    </BrowserRouter>

);

export default Routes;