import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RouterPaths } from '../src/utils/RouterPaths';
import TrucoGaucho from '../src/games/TrucoGaucho';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path={RouterPaths.HOME_ROUTE} exact component={TrucoGaucho}/>
                <Route path={RouterPaths.TRUCO_GAUCHO_ROUTE} component={TrucoGaucho}/>
            </Switch>
        </BrowserRouter>

    );
}