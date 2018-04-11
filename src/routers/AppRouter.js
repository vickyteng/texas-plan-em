import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StartSession from 'components/StartSession';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StartSession} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;