import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateSession from 'components/CreateSession';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={CreateSession} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;