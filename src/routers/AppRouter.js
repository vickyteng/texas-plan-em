import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StartSession from 'components/StartSession';
import Game from 'components/Game';


const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StartSession} />
            <Route exact path="/game/:id" component={Game} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;