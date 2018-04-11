import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StartSession from 'components/StartSession';
import Users from 'components/users/Users';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StartSession} />
            <Route exact path="/users" component={Users} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;