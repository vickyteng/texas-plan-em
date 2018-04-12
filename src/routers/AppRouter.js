import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateSession from 'components/CreateSession';
import Game from 'components/Game';
import Users from 'components/users/Users'


const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={CreateSession} />
            <Route exact path="/game/:id" component={Game} />
            <Route exact path="/users" component={Users} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;